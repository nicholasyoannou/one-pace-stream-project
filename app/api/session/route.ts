import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();

  if (session) {
    return NextResponse.json({ authenticated: true }, { status: 200 });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}

// import { cookies } from "next/headers";
// import { getIronSession } from "iron-session";

// export async function GET() {
//   const session = getIronSession(cookies(), {
//     password: process.env.COOKIEPASSWORD,
//     cookieName: "session",
//   });
// }

// export async function POST() {
//   const session = getIronSession(cookies(), {
//     password: process.env.COOKIEPASSWORD,
//     cookieName: "session",
//   });
//   session.username = "Alison";
//   await session.save();
// }
