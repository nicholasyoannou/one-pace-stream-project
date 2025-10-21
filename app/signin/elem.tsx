"use client";

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function signInRedirect() {
  // const signInResult = await signIn("fusionauth", {
  //   callbackUrl: "/authorise/msg/success",
  // });
  const signInResult = await signIn();

  return <div>{/* make a redirect using red */}</div>;
}
