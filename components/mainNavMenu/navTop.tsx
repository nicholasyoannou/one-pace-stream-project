"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import * as React from "react";
import * as globals from "@/app/globals";
import { useSession } from "next-auth/react";
import { getSession, signIn, signOut } from "next-auth/react";

export default function NavTop({
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
      <>
        <div className="z-50 bg-[#23252b] fixed px-14 self-stretch max-md:mb-10 min-h-[70.5px] flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          {children}
        </div>
      </>
    );
  }

  if (status === "authenticated") {
    return (
      <>
        <div className="z-50 bg-[#23252b] fixed px-14 self-stretch max-md:mb-10 min-h-[70.5px] flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          {children}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="self-stretch content-center pt-3.5 max-md:mb-10 flex w-full items-stretch justify-between gap-5 px-0.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        {children}
      </div>
    </>
  );
}
