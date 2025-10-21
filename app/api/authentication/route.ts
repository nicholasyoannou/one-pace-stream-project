import { NextResponse } from "next/server";
import * as crAuth from "./crAuthData";
import { unstable_noStore as noStore } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_URL,
  token: process.env.UPSTASH_TOKEN,
});

export async function GET() {
  noStore();

  const cookiecheck = cookies().get("security-token");

  if (!cookiecheck) {
    return NextResponse.json(
      { message: "Refusal to authorise. Please reauthenticate." },
      { status: 405 }
    );
  } else {
    const cookiecheck = cookies().get("security-token-expire");
    if (Number(cookiecheck.value) < Math.floor(new Date().getTime() / 1000)) {
      return NextResponse.json(
        { message: "Refusal to authorise. Please reauthenticate." },
        { status: 405 }
      );
    } else {
      const cookiecheck = cookies().get("security-token");
      const val = await redis.get(cookiecheck.value);
      if (!val) {
        return NextResponse.json(
          {
            message:
              "Invalid authentication token. Constant spoofing, editing, and manipulation of cookies may create IP bans.",
          },
          { status: 405 }
        );
      }
    }
  }

  const encodedCredentials = Buffer.from(
    `${crAuth.clientID}:${crAuth.clientSecret}`
  ).toString("base64"); // Use Buffer.from() instead of btoa()
  const data = await fetch(
    "https://beta-api.crunchyroll.com/auth/v1/device/code",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${encodedCredentials}`,
        "Accept-Charset": "UTF-8",
        Host: "beta-api.crunchyroll.com",
        Connection: "Keep-Alive",
      },
    }
  );
  return NextResponse.json(await data.json());
}

export async function POST(req: Request) {
  noStore();

  const cookiecheck = cookies().get("security-token");

  if (!cookiecheck) {
    return NextResponse.json(
      { message: "Refusal to authorise. Please reauthenticate." },
      { status: 405 }
    );
  } else {
    const cookiecheck = cookies().get("security-token-expire");
    if (Number(cookiecheck.value) < Math.floor(new Date().getTime() / 1000)) {
      return NextResponse.json(
        { message: "Refusal to authorise. Please reauthenticate." },
        { status: 405 }
      );
    } else {
      const cookiecheck = cookies().get("security-token");
      const val = await redis.get(cookiecheck.value);
      if (!val) {
        return NextResponse.json(
          {
            message:
              "Invalid authentication token. Constant spoofing, editing, and manipulation of cookies may create IP bans.",
          },
          { status: 405 }
        );
      }
    }
  }

  const encodedCredentials = Buffer.from(
    `${crAuth.clientID}:${crAuth.clientSecret}`
  ).toString("base64");

  try {
    const body = await req.json();
    const data = await fetch(
      "https://beta-api.crunchyroll.com/auth/v1/device/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedCredentials}`,
          "Accept-Charset": "UTF-8",
          Host: "beta-api.crunchyroll.com",
          Connection: "Keep-Alive",
        },
        body: JSON.stringify(body),
      }
    );
    const two = await data.json();
    if (two.access_token) {
      await redis.setex(cookiecheck.value, 360, two.access_token);
      await redis.setex(cookiecheck.value + "_refresh", 360, two.refresh_token);
    }
    if (data.status == 204) {
      return NextResponse.json({ message: "OK" });
    }
    if (data.status == 200) {
      // return message of 'ok' if status is 204

      return NextResponse.json({ message: "Good" }, { status: 201 });
      // Saves the data in a temporary database, probably mongodb / redis or something of the like for a minute.
      // A request ID/ID for this record in DB is generated and saved in browser cookies. User forwarded to /checking where this data is checked.

      // return NextResponse.json(await data.json()); - gets token
    }
    if (data.status == 400) {
      return NextResponse.json({ message: "Expired" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return "Invalid JSON data";
  }
}
