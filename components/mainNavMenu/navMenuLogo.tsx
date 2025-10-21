"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import * as React from "react";
import * as globals from "@/app/globals";
import { useSession } from "next-auth/react";
import { getSession, signIn, signOut } from "next-auth/react";

export default function NavMenuLogo(props: any) {
  const { data: session, status } = useSession();

  if (status === "loading" && !props.signedOut) {
    return (
      <>
        <div className="animate-pulse bg-gray-700 h-[60px] w-[136px]"></div>
      </>
    );
  }

  if (status === "authenticated") {
    return (
      <>
        <Link href={"/"}>
          <Image
            loading="lazy"
            src="/assetMenu/one-pace-logo-auth.png"
            width={136}
            alt="One Pace logo"
            height={60}
            className="py-2"
          />
        </Link>
      </>
    );
  }
  return (
    <>
      <Link href={"/"}>
        <Image
          loading="lazy"
          src="/assetMenu/one-pace-logo.svg"
          width={170}
          alt="One Pace logo"
          height={72}
          className="object-contain pt-2 object-center overflow-hidden"
        />
        <div
          className={clsx(
            "text-stone-300 text-opacity-90 text-[15px] self-stretch",
            globals.belowlogo.className
          )}
        >
          Stream Project
        </div>
      </Link>
    </>
  );
}
