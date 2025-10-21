"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import modStyles from "@/app/styles.module.css";
import * as globals from "@/app/globals";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useSession } from "next-auth/react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { getSession, signIn, signOut } from "next-auth/react";

export default function NavLoginButton(props: any) {
  const { data: session, status } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [disableTransitions, setDisableTransitions] = React.useState(true);
  React.useEffect(() => {
    if (status === "authenticated") {
      setDisableTransitions(false);
    }
  }, [status]);

  if (status === "loading" && !props.signedOut) {
    return <div className="animate-pulse bg-gray-700 h-[30px] w-[30px]"></div>;
  }

  if (status === "authenticated") {
    return (
      <div
        className={clsx(
          `flex gap-1 hover:bg-slate-500 h-full items-stretch relative px-3 ${
            disableTransitions ? "transition-none" : "transition-colors"
          }`,
          modStyles.svgfill
        )}
        style={{ alignItems: "center" }}
      >
        <Avatar
          id="menuAvatar"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          className="cursor-pointer"
          onClick={handleClick}
          alt={`${session?.user?.data.username}`}
          src={`https://static.crunchyroll.com/assets/avatar/170x170/${session?.user?.data.avatar}`}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "menuAvatar",
          }}
        >
          <Link href={`/profile/me`}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </Link>
          <Link href={"/account"}>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Link>
          <Link href={""} onClick={() => signOut()}>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
  return (
    <Link href={"/authorise/login"}>
      <div
        className={clsx(
          "flex gap-2 group hover:text-[#565656] transition-all duration-300",
          modStyles.svgfill
        )}
      >
        <Image
          loading="lazy"
          src="/assetMenu/loginfav.svg"
          width={24}
          alt="One Pace login icon"
          height={24}
          className={clsx(
            "aspect-square object-contain object-center w-[19px] overflow-hidden self-stretch shrink-0 max-w-full"
          )}
        />
        <div
          className={clsx(
            "text-white text-sm transition-all delay-75 font-bold self-center my-auto",
            globals.startwatchingbutton.className
          )}
        >
          LOG IN
        </div>
      </div>
    </Link>
  );
}
