import * as React from "react";
import NavMenu from "@/app/navMenu";
import * as globals from "@/app/globals";
import clsx from "clsx";
import Val from "./val";
import Link from "next/link";

import Lottie from "lottie-react";
import cogwheel from "@/public/animations/lottie/cogss.json";
import getCsrfToken from "next-auth";
import { cookies } from "next/headers";

export default async function LoginPage() {
  return (
    <div className="bg-neutral-900 h-screen flex flex-col items-stretch">
      {/* <div className="absolute inset-0 z-0">
        <App />
      </div> */}
      <Val csrfToken={cookies().get("next-auth.csrf-token").value} />
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[100px] items-stretch pt-3.5 max-md:max-w-full">
        <div className="absolute w-full bg-gradient-to-b from-transparent to-neutral-900"></div>
        <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-transparent to-neutral-900">
          <div className="relative flex self-center items-center text-center flex-col px-14">
            <NavMenu sound={true} />
          </div>
        </div>
        {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
        /> */}
      </div>
      <div className="self-center w-[800px]">
        <div className="flex-col columns-1 self-center bg-[#212529] overflow-hidden relative flex min-h-[300px] mt-20 px-6 pt-6 pb-12 max-md:max-w-full max-md:mt-10 max-md:pr-5">
          <div className="relative self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5"></div>
          <div
            className={clsx(
              "text-white text-center relative pt-2 text-xl font-extrabold uppercase max-md:max-w-full",
              globals.headinglanding.className
            )}
          >
            Validating your session...
          </div>
          <Lottie
            animationData={cogwheel}
            style={{ height: "200px", width: "200px" }}
            className="self-center"
          />
          <div
            className={clsx(
              "relative text-white text-opacity-80 pt-1 text-center text-base font-medium px-10",
              globals.headinglanding.className
            )}
          >
            This may take up to 10 seconds. Thanks for your patience.
          </div>
          <div className="relative mt-2 hidden" id="nothingness"></div>
          <div className="relative text-zinc-300 text-sm font-medium mt-3 px-32 text-center opacity-90">
            This part of the process is just connecting to Crunchyroll to
            confirm your account is Premium. After this process is complete, the
            account token created from the token you put in earlier, is
            invalidated (meaning, the bot logs out of your account). This can be
            checked on the Crunchyroll website, by going to{" "}
            <Link
              className="underline hover:text-blue-400"
              href={"https://www.crunchyroll.com/account/devices"}
            >
              Device Management
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
