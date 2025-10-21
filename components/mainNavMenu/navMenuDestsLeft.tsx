"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import * as React from "react";
import * as globals from "@/app/globals";
import { useSession } from "next-auth/react";
import { getSession, signIn, signOut } from "next-auth/react";
import globalStyles from "./styles.module.css";
import SearchIcon from "@/public/assetMenu/v2/searchIcon.svg";

export default function NavMenuDestsLeft(props: any) {
  const { data: session, status } = useSession();
  const [disableTransitions, setDisableTransitions] = React.useState(true);

  React.useEffect(() => {
    if (status === "authenticated") {
      setDisableTransitions(false);
    }
  }, [status]);

  if (status === "loading" && !props.signedOut) {
    return (
      <>
        <div className="animate-pulse bg-gray-700 h-[30px] w-[100px]"></div>
        <div className="animate-pulse bg-gray-700 h-[30px] w-[100px]"></div>
      </>
    );
  }

  if (status === "authenticated") {
    return (
      <>
        <div
          className={`hover:bg-slate-500 duration-300 h-full overflow-auto items-stretch flex relative ${
            disableTransitions ? "transition-none" : "transition-colors"
          }`}
          style={{ alignItems: "center" }}
        >
          <Link
            className="h-full w-full flex px-3"
            style={{ alignItems: "center" }}
            href={"/browse"}
          >
            <div
              className={clsx(
                "flex text-white text-base font-semibold pr-2",
                globalStyles.erc
              )}
            >
              <SearchIcon fill="#dadada" />
              <br />
            </div>
            <div
              className={clsx(
                "hover:text-white text-base font-medium text-[#DADADA]",
                globals.navBarDestsLeft.className
              )}
            >
              Browse Arcs
              <br />
            </div>
          </Link>
        </div>
      </>
    );
  }
  return <></>;
}
