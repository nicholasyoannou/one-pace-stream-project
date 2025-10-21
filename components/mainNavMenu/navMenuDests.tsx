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
import BookmarkIcon from "@/public/assetMenu/v2/bookmarkIcon.svg";

// rough notes
{
  /* <Image
              alt="Search icon"
              width={20}
              height={20}
              src="/assetMenu/v2/searchIcon.svg"
              className={globalStyles.erc}
              style={{ fill: "#dadada" }}
            /> */
}
// end rough notes

export default function NavMenuDests(props: any) {
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
        <div className="animate-pulse pl-2 bg-gray-700 h-[30px] w-[30px]"></div>
      </>
    );
  }

  if (status === "authenticated") {
    return (
      <>
        <div
          className={`hover:bg-slate-500 h-full overflow-auto items-stretch flex relative ${
            disableTransitions ? "transition-none" : "transition-colors"
          }`}
          style={{ alignItems: "center" }}
        >
          <Link
            href={"/search"}
            className="h-full w-full flex px-3"
            style={{ alignItems: "center" }}
          >
            <div
              className={clsx(
                "flex text-white text-base font-semibold",
                globalStyles.erc
              )}
            >
              <SearchIcon fill="#dadada" />
              <br />
            </div>
          </Link>
        </div>

        <div
          className={`hover:bg-slate-500 h-full overflow-auto items-stretch flex relative ${
            disableTransitions ? "transition-none" : "transition-colors"
          }`}
          style={{ alignItems: "center" }}
        >
          <Link
            href={"/search"}
            style={{ alignItems: "center" }}
            className="h-full w-full flex px-3"
          >
            <div
              className={clsx(
                "flex text-white text-base font-semibold",
                globalStyles.erc
              )}
            >
              <BookmarkIcon fill="#dadada" />
              <br />
            </div>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <Link href={"/about"}>
        <div
          className={clsx(
            "text-white text-base font-semibold",
            globals.startwatchingbutton.className
          )}
        >
          ABOUT
          <br />
        </div>
      </Link>
      {/* <div
          className={clsx(
            "text-white text-base font-semibold",
            globals.startwatchingbutton.className
          )}
        >
          TERMS
          <br />
        </div> */}
    </>
  );
}
