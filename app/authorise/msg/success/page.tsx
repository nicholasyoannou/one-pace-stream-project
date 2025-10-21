import * as React from "react";
import Image from "next/image";
import NavMenu from "@/app/navMenu";
import * as globals from "@/app/globals";
import clsx from "clsx";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Name from "./name";
import ProfilePic from "./profilepic";
import Script from "next/script";
// import App from "@/components/particles";

export default function LoginPageSuccess() {
  return (
    <div className="bg-neutral-900 flex flex-col items-stretch">
      <div className="flex-col overflow-hidden self-stretch relative h-screen flex min-h-[100px] items-stretch max-md:max-w-full">
        {/* <Image
          loading="lazy"
          alt="Crunchyroll hime"
          width={1000}
          height={2000}
          src="/landing/signin/crunchyroll-hime-forest-winter-2024.jpg"
          className="object-cover h-full w-full overflow-hidden shrink-0 max-w-full"
        /> */}
        {/* <App /> */}
        <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-transparent to-neutral-900">
          <div className="absolute h-full w-full bg-gradient-to-bl from-transparent to-neutral-900">
            <div className="relative flex self-center items-center text-center flex-col">
              <NavMenu />
            </div>
            <div className="px-4 md:px-8 lg:px-36 xl:px-[470px]">
              <div className="flex-col columns-1 self-center bg-[#222921] relative flex min-h-[230px] mt-20 pt-6 pb-12">
                <div className="relative flex justify-between gap-5">
                  <div className="bg-[#222921] absolute h-full object-cover object-center inset-0">
                    <div
                      className={clsx(
                        "text-white text-center text-xl font-extrabold uppercase mt-1",
                        globals.headinglanding.className
                      )}
                    >
                      authentication successful
                    </div>
                  </div>
                </div>

                <ProfilePic />
                <div
                  className={clsx(
                    "relative text-white text-opacity-80 text-center text-base font-medium",
                    globals.headinglanding.className
                  )}
                >
                  Welcome, <Name />
                </div>
                <div
                  className={clsx(
                    "relative px-12 pt-3 self-center flex gap-1 mt-3.5",
                    globals.headinglanding.className
                  )}
                >
                  <div className="grid grid-flow-col columns-2">
                    <div className="">
                      <div className=" text-white text-base font-medium">
                        Good News! You’re Premium.
                      </div>
                      <div className="text-neutral-400 text-base font-medium leading-tight">
                        Your subscription has been detected as on Premium.
                        You’ve been successfully authenticated and can now
                        access the project. Please note that sessions do expire
                        after a length of inactivity.
                      </div>
                    </div>
                    <div>
                      <Image
                        src={"/landing/signin/mascot.webp"}
                        width={100}
                        height={50}
                        alt="crunchyroll mascot"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative mt-5"></div>
              </div>
            </div>
            <div className="pt-5 text-center px-4 md:px-8 lg:px-36 xl:px-96">
              {" "}
              <div
                className={clsx(
                  "text-white text-center text-xl font-semibold uppercase mt-1",
                  globals.headinglanding.className
                )}
              >
                new user?
              </div>
              <div
                className={clsx(
                  "text-neutral-400 text-center text-base px-36 font-medium mt-1 leading-5",
                  globals.headinglanding.className
                )}
              >
                Welcome to One Pace: Stream Project. Everything is
                self-explanatory, no tutorial needed. Feel free to play around.
              </div>
            </div>
            <div className="pt-5 text-center px-4 md:px-8 lg:px-36 xl:px-96">
              <div className="px-4 md:px-8 lg:px-64">
                <div className="bg-[#8FF043] min-h-[50px] bg-opacity-10">
                  {" "}
                  <div
                    className={clsx(
                      "text-white text-center self-center py-2.5 text-2xl font-semibold mt-1",
                      globals.headinglanding.className
                    )}
                  >
                    Redirecting in 10 seconds...
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  "text-neutral-400 text-center text-base px-36 font-medium mt-1",
                  globals.headinglanding.className
                )}
              >
                Not redirected? Click here.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
        /> */}
    </div>
  );
}
