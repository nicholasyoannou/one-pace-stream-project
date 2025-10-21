import { NextResponse, NextRequest } from "next/server";
import querystring from "querystring";
import * as crAuth from "../crAuthData";
import fetch from "node-fetch";
import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";

function makeid(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const redis = new Redis({
  url: process.env.UPSTASH_URL,
  token: process.env.UPSTASH_TOKEN,
});

export async function POST(req: NextRequest, res: NextResponse) {
  const cookiecheck = cookies().get("security-token");
  if (cookiecheck) {
    const expiry = cookies().get("security-token-expire");
    if (Number(expiry.value) < Math.floor(new Date().getTime() / 1000)) {
      cookies().delete("security-token");
      cookies().delete("security-token-expire");
    } else {
      return NextResponse.json(
        {
          message: "CAPTCHA session exists. Refuse to validate.",
        },
        { status: 200 }
      );
    }
  }

  // Get the raw request body
  const rawData = await req.text();
  const rawDataJ = JSON.stringify(rawData);

  // Parse the form data
  const formData = querystring.parse(rawData);

  // Now you can access form fields using formData
  const form = new URLSearchParams();
  form.append("secret", process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY);
  form.append("response", formData["cf-turnstile-response"]);
  const result = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body: form }
  );
  const json = await result.json();
  console.log(json);

  if (json.success) {
    const one = makeid(60);
    const two = makeid(60);
    const data = await redis.setex(one, 360, two);
    cookies().set("security-token", one, { secure: true });
    cookies().set(
      "security-token-expire",
      `${Math.floor(new Date().getTime() / 1000) + 360}`,
      { secure: true }
    );
  }

  return NextResponse.json(
    { message: "The CAPTCHA has been validated." },
    { status: json.success ? 200 : 400 }
  );
}
