import * as React from "react";
import Image from "next/image";
import NavMenu from "@/app/navMenu";
import * as globals from "@/app/globals";
import clsx from "clsx";
import CrunchyCode from "./crunchyCode";
import Link from "next/link";
// import App from "@/components/particles";

export default function LoginPage() {
  return (
    <div className="bg-neutral-900 h-screen flex flex-col items-stretch">
      {/* <div className="absolute inset-0 z-0">
        <App />
      </div> */}
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
      <div className="flex-col columns-1 self-center bg-[#212529] overflow-hidden relative flex min-h-[537px] mt-20 px-6 pt-6 pb-12 max-md:max-w-full max-md:mt-10 max-md:pr-5">
        <div className="relative self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5">
          <div className="bg-[#212529] absolute h-full w-full object-cover object-center inset-0">
            <div
              className={clsx(
                "text-white text-center text-xl font-extrabold uppercase grow mt-1 self-start max-md:max-w-full",
                globals.headinglanding.className
              )}
            >
              authenticate to one pace: Stream project{" "}
            </div>
          </div>
        </div>

        <Image
          loading="lazy"
          alt="Crunchyroll logo"
          src={"/landing/signin/crunchylogo.webp"}
          width={58}
          height={58}
          className="pt-5 object-contain object-center w-[58px] opacity-80 overflow-hidden self-center max-w-full mt-9"
        />
        <div
          className={clsx(
            "relative text-white text-opacity-80 text-center text-base font-medium",
            globals.headinglanding.className
          )}
        >
          Login with Crunchyroll&reg;
        </div>
        <div
          className={clsx(
            "relative px-12 pt-3 self-center flex gap-1 mt-3.5",
            globals.headinglanding.className
          )}
        >
          <div className="flex flex-col items-stretch">
            <div className="h-[28px] w-[28px] right-3 rounded-full border-[1.5px] border-[#A0A0A0] flex relative">
              <div className="text-neutral-400 absolute -top-[11px] -right-[10.9px] text-sm font-medium justify-center items-stretch mt-1 pr-5 py-2.5 rounded-[50%] max-md:pr-5">
                1
              </div>
            </div>
            <div className="h-[28px] w-[28px] right-3 top-[32px] rounded-full border-[1.5px] border-[#A0A0A0] flex relative">
              <div className="text-neutral-400 absolute -top-[16.5px] -right-[11.4px] text-sm font-medium justify-center items-stretch mt-2.5 pr-5 py-2.5 rounded-[50%] max-md:pr-5">
                2
              </div>
            </div>
            <div className="h-[28px] w-[28px] right-3 top-[75px] rounded-full border-[1.5px] border-[#A0A0A0] flex relative">
              <div className="text-neutral-400 absolute -top-[18.9px] -right-[12px] text-sm font-medium justify-center items-stretch mt-3 pr-5 py-2.5 rounded-[50%] max-md:pr-5">
                3
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
              <div className="text-neutral-400 text-base font-medium">
                Go to:
              </div>
              <div className="text-white text-base font-medium leading-tight">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://www.crunchyroll.com/activate"}
                >
                  www.crunchyroll.com/activate
                </a>
              </div>
            </div>
            <div className="text-neutral-400 text-base font-medium mt-3">
              Enter this code:
            </div>
            <CrunchyCode />
            <div className="text-neutral-400 text-base font-medium mt-4">
              <div className="text-neutral-400 text-base font-medium shrink basis-auto">
                Stay on this screen and you’ll be logged in{" "}
                <br className="leading-10" /> automatically.
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-5"></div>
        <div className="relative text-zinc-300 text-sm font-medium mt-3 px-10 text-center opacity-90">
          By continuing, you're agreeing to the{" "}
          <Link
            className="underline hover:text-blue-400"
            href={"/policies/terms"}
          >
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link
            className="underline hover:text-blue-400"
            href={"/policies/privacy"}
          >
            Privacy Policy
          </Link>
          .
        </div>
        <div className="relative text-zinc-300 text-sm font-medium mt-3 px-10 text-center opacity-90">
          Please note: These codes often expire within a few minutes of
          <br />
          creation. Please use the code in a speedily fashion.
        </div>
      </div>
    </div>
  );
}
