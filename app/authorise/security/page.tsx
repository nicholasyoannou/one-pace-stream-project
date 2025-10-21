import * as React from "react";
import NavMenu from "@/app/navMenu";
import * as globals from "@/app/globals";
import clsx from "clsx";
import Head from "next/head";
import Script from "next/script";
import Val from "./val";

import Lottie from "lottie-react";
import cogwheel from "@/public/animations/lottie/cogss.json";

export default function LoginPage() {
  return (
    <div className="bg-neutral-900 h-screen flex flex-col items-stretch">
      {/* <div className="absolute inset-0 z-0">
        <App />
      </div> */}
      <Val />
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[100px] items-stretch pt-3.5 max-md:max-w-full">
        <div className="absolute w-full bg-gradient-to-b from-transparent to-neutral-900"></div>
        <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-transparent to-neutral-900">
          <div className="relative flex self-center items-center text-center flex-col px-14">
            <NavMenu />
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
          <Script src="https://unpkg.com/htmx.org@1.9.9"></Script>

          <div
            className={clsx(
              "text-white text-center relative pt-2 text-xl font-extrabold uppercase max-md:max-w-full",
              globals.headinglanding.className
            )}
          >
            SECURITY: CHECKING
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
            Your session is currently being checked. Please wait.
          </div>
          <Script id="cf-turnstile-callback">
            {`window.onloadTurnstileCallback = function () {
          window.turnstile.render('#my-widget', {
            sitekey: '${process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY}',
          })
        }`}
          </Script>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
            async={true}
            defer={true}
          />
          <form
            hx-post="/api/authentication/antibot"
            hx-trigger="every 1s target:[name*='cf-turnstile-response']"
            hx-boost="true"
            hx-target="#nothingness"
          >
            <div id="my-widget" className="checkbox" />
          </form>
          <div className="relative mt-2 hidden" id="nothingness"></div>
          <div className="relative text-zinc-300 text-sm font-medium mt-3 px-32 text-center opacity-90">
            This service is provided by Cloudflare&reg;, for a privacy-focused
            CAPTCHA experience and is subject to their Terms of Service. This is
            done to prevent abuse of the service.
          </div>
        </div>
      </div>
    </div>
  );
}
