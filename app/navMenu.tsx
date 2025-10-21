import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import modStyles from "./styles.module.css";
import { useRouter } from "next/router";
import * as globals from "./globals";
import * as React from "react";
import { cookies } from "next/headers";
import { getCookies } from "next-client-cookies/server";
import Speaker from "@/components/mainNavMenu/navSpeaker";
import NavLoginButton from "@/components/mainNavMenu/navLoginButton";
import NavIconsExternals from "@/components/mainNavMenu/navIconsExternals";
import NavMenuDests from "@/components/mainNavMenu/navMenuDests";
import NavMenuLogo from "@/components/mainNavMenu/navMenuLogo";
import NavTop from "@/components/mainNavMenu/navTop";
import NavMenuDestsLeft from "@/components/mainNavMenu/navMenuDestsLeft";
import NavTopLeft from "@/components/mainNavMenu/navTopLeft";
import NavTopRight from "@/components/mainNavMenu/navTopRight";

export default function NavMenu(props: any) {
  // get next-auth.session-token cookie, this is just to prevent the user seeing skeleton loading without being logged in
  const cookies = getCookies();
  const checkSignedIn = cookies.get("next-auth.session-token");

  if (!checkSignedIn) {
    return (
      <NavTop signedOut={true}>
        <NavTopLeft signedOut={true}>
          {/* Left side of the menu starts here */}
          <NavMenuLogo signedOut={true} />
          <NavMenuDestsLeft signedOut={true} />
        </NavTopLeft>
        <NavTopRight signedOut={true}>
          {/* Right side of the menu starts here */}
          <NavMenuDests signedOut={true} />
          <NavLoginButton signedOut={true} />
          <NavIconsExternals signedOut={true} />
          {props.sound && <Speaker />}
        </NavTopRight>
      </NavTop>
    );
  }

  return (
    <NavTop>
      <NavTopLeft>
        {/* Left side of the menu starts here */}
        <NavMenuLogo />
        <NavMenuDestsLeft />
      </NavTopLeft>
      <NavTopRight>
        {/* Right side of the menu starts here */}
        <NavMenuDests />
        <NavLoginButton />
        <NavIconsExternals />
        {props.sound && <Speaker />}
      </NavTopRight>
    </NavTop>
  );
}
