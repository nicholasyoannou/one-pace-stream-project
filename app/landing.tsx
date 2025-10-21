import * as React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import * as globals from "./globals";

import NavMenu from "./navMenu";
import Footer from "./footer";

import LandingSwiper from "@/components/landing/landingSwiper";
import LandingDescPopup from "@/components/landing/landingDescPopup";

export default function Landing() {
  return (
    <div className="pl-4 pr-4 bg-neutral-900 flex flex-col items-stretch">
      <div className="bg-neutral-900 flex w-full flex-col px-1 max-md:max-w-full">
        <div className="flex-col overflow-hidden self-stretch relative flex min-h-[485px] w-full items-stretch pt-3.5 max-md:max-w-full">
          <Image
            loading="lazy"
            alt="One Pace landing page background"
            src="/landing/mainbg.jpg"
            width={1920}
            height={1080}
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div>
            <div
              className={clsx(
                "text-[#FFFFFF] pt-2 text-opacity-90 drop-shadow-md text-xs font-semibold absolute bottom-0 right-0 p-3",
                globals.headinglanding.className
              )}
            >
              <p>*Crunchyroll&reg; Premium subscription required.</p>
            </div>
          </div>

          <div className="absolute pt-[800px] w-full bg-gradient-to-b from-transparent to-neutral-900"></div>
          <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-transparent to-neutral-900">
            <div className="relative flex w-full flex-col px-14 max-md:max-w-full max-md:px-5">
              <NavMenu />

              <div
                className={clsx(
                  "text-white text-3xl font-extrabold uppercase self-stretch whitespace-nowrap mt-8 max-md:max-w-full drop-shadow-lg",
                  globals.headinglanding.className
                )}
              >
                The grand line awaits!
              </div>
              <div
                className={clsx(
                  "text-white text-xl font-semibold self-stretch mt-1.5 max-md:max-w-full drop-shadow-md",
                  globals.headinglanding.className
                )}
              >
                Stream One Pace* directly in your browser
                <br />
                without ads.
              </div>
              <div className="bg-sky-500 hover:bg-sky-600 transition-all delay-[25ms] w-55 max-w-full flex-col justify-center mt-3 rounded-xl self-start">
                <Link href={"/authorise/signupLanding"}>
                  <div
                    className="relative bg-sky-500 hover:bg-sky-600 hover:cursor-pointer transition-all delay-[25ms] flex gap-2 pl-2.5 pr-4 py-2.5 rounded-tl-[25px] rounded-tr-[1px]"
                    // style={{ borderRadius: "25px 25px 0 0" }}
                  >
                    <div className="absolute -top-[37px] right-10">
                      <img
                        loading="lazy"
                        src={"/landing/luffyyay.png"}
                        alt="luffy"
                        className=""
                        width={24}
                        height={24}
                      />
                    </div>
                    <Image
                      loading="lazy"
                      src={"/landing/rightArrow.svg"}
                      alt="Right arrow"
                      width={24}
                      height={24}
                      className="object-contain object-center w-3 overflow-hidden max-w-full"
                    />
                    <div>
                      <div
                        className={clsx(
                          "text-white font-bold uppercase",
                          globals.startwatchingbutton.className
                        )}
                      >
                        START WATCHING
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-full mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex bg-[#212529] max-md:flex-col max-md:items-stretch max-md:gap-0 h-52 rounded-lg">
            <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
              <div className="flex-col fill-sky-500 stroke-[2px] stroke-sky-500 overflow-hidden relative flex aspect-[1.7747252747252746] grow justify-center items-stretch pr-1.5 py-0.5 max-md:mt-10">
                <Image
                  loading="lazy"
                  src={"/landing/blueforluffy.svg"}
                  alt="Blue backing for Luffy to sit on. Not fit for the pirate king though"
                  height={1000}
                  width={1000}
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
                <Image
                  src={"/landing/luffycutintotriangle.svg"}
                  alt="Luffy smile"
                  loading="lazy"
                  height={1000}
                  width={1000}
                  className="aspect-[1.71] object-cover object-center w-full overflow-hidden z-[1] -mt-2"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-12 items-end max-md:max-w-full max-md:mt-10">
                <div
                  className={clsx(
                    "text-white text-right text-2xl font-medium whitespace-nowrap mr-4 max-md:mr-2.5",
                    globals.headinglanding.className
                  )}
                >
                  35 ARCS AND COUNTING
                </div>
                <LandingDescPopup />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <LandingSwiper />
        </div>
        <div
          className={clsx(
            "text-white text-center text-lg font-semibold self-center max-w-[847px] mt-20 max-md:mt-10",
            globals.headinglanding.className
          )}
        >
          START WATCHING NOW!
        </div>
        <div className="bg-sky-500 hover:bg-sky-600 transition-all hover:cursor-pointer delay-[25ms] self-center flex items-stretch gap-2 mt-2.5 pl-2.5 pr-4 py-3 rounded-tl-[20px]">
          <Image
            loading="lazy"
            src={"/landing/rightArrow.svg"}
            alt="Right arrow"
            width={24}
            height={24}
            className="aspect-[1.09] object-contain object-center w-3 overflow-hidden shrink-0 max-w-full"
          />
          <Link href={"/authorise/signupLanding"}>
            <div
              className={clsx(
                "text-white font-bold uppercase whitespace-nowrap self-start relative",
                globals.startwatchingbutton.className
              )}
            >
              START WATCHING
              <div className="absolute -top-[34.54px] -right-3">
                <img
                  loading="lazy"
                  src={"/landing/luffybeingluffy.png"}
                  alt="luffy"
                  className=""
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}
