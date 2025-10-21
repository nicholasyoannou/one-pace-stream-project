"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import * as React from "react";
import { useSession } from "next-auth/react";
import { getSession, signIn, signOut } from "next-auth/react";

export default function NavIconsExternals(props: any) {
  const { data: session, status } = useSession();
  if (status === "loading" && !props.signedOut) {
    return <></>;
  }

  if (status === "authenticated") {
    return <></>;
  }
  return (
    <>
      <a href="https://discord.gg/onepace">
        <Image
          src="/assetMenu/discord.svg"
          alt="One Pace Discord Server"
          width={22}
          height={22}
        />
      </a>
      <a href="https://forums.arlongpark.net/topic/35045/one-pace/3212">
        <Image
          src="/assetMenu/arlongpark.svg"
          alt="Arlong Park Forums"
          width={22}
          height={22}
        />
      </a>
      <a href="http://onepiecetracklist.com/">
        <svg
          viewBox="0 5 24 15"
          style={{
            width: "30px",
            height: "37px",
          }}
          role="presentation"
          className="md-icon material-icons"
        >
          <path
            d="M16,9H13V14.5A2.5,2.5 0 0,1 10.5,17A2.5,2.5 0 0,1 8,14.5A2.5,2.5 0 0,1 10.5,12C11.07,12 11.58,12.19 12,12.5V7H16M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"
            style={{ fill: "#FFFFFF" }}
          ></path>
        </svg>
      </a>
    </>
  );
}
