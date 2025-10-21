"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import * as React from "react";
import * as globals from "@/app/globals";
import { useSession } from "next-auth/react";
import { getSession, signIn, signOut } from "next-auth/react";

export default function NavTopLeft({
  children,
  signedOut = false,
  ...pageProps
}: {
  children: React.ReactNode;
  signedOut?: boolean;
  pageProps: any;
}) {
  const { data: session, status } = useSession();

  if (status === "loading" && !signedOut) {
    return (
      <div
        className="flex flex-row gap-4 items-center"
        style={{ alignItems: "center" }}
      >
        {children}
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div
        className="flex flex-row gap-4 items-center"
        style={{ alignItems: "center" }}
      >
        {children}
      </div>
    );
  }
  return (
    <div
      className="flex flex-row gap-4 items-center"
      style={{ alignItems: "center" }}
    >
      {children}
    </div>
  );
}
