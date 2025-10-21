import * as React from "react";
import Image from "next/image";
import NavMenu from "@/app/navMenu";
import * as globals from "@/app/globals";
import clsx from "clsx";
import Link from "next/link";
import App from "@/components/particles";

export default function UnknownPage() {
  return (
    <div className="bg-neutral-900 h-screen flex flex-col items-stretch">
      {/* <div className="absolute inset-0 z-0">
        <App />
      </div> */}
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[100px] items-stretch pt-3.5 max-md:max-w-full">
        <div className="absolute w-full bg-gradient-to-b from-transparent to-neutral-900"></div>
        <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-transparent to-neutral-900">
          <div className="relative flex self-center items-center text-center flex-col px-14">
            <NavMenu />
          </div>
        </div>
      </div>
      <div className="self-center w-[800px]">
        <div className="flex-col columns-1 self-center bg-[#212529] overflow-hidden relative flex min-h-[300px] mt-20 px-6 pt-6 pb-12 max-md:max-w-full max-md:mt-10 max-md:pr-5">
          <div className="relative self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5"></div>
          <Image
            loading="lazy"
            alt="Luufy sad face"
            src={"/landing/signin/luffysad.png"}
            width={100}
            height={100}
            className="object-contain object-center opacity-80 overflow-hidden self-center max-w-full mt-2"
          />
          <div
            className={clsx(
              "text-white text-center relative pt-2 text-xl font-bold uppercase max-md:max-w-full",
              globals.headinglanding.className
            )}
          >
            Authentication: Unknown Error
          </div>

          <div
            className={clsx(
              "relative text-white text-opacity-80 pt-1 text-center text-base font-medium px-10",
              globals.headinglanding.className
            )}
          >
            It seems an unknown error has occured while you were attempting to
            login. This could be due to a number of issues, such as our end
            (such as servers being down) or your end blocking our end. Either
            way, please try again in a couple of minutes.
          </div>
          <div className="bg-indigo-500 hover:bg-indigo-600 transition-all delay-[25ms] w-55 max-w-full flex-col justify-center mt-4 rounded-xl self-center">
            <Link href={"/authorise/login"}>
              <div
                className="relative bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer transition-all delay-[25ms] flex gap-2 pl-2.5 pr-4 py-2.5 rounded-tl-[25px] rounded-tr-[1px]"
                // style={{ borderRadius: "25px 25px 0 0" }}
              >
                {/* <div className="absolute -top-[4px] right-4">
                  <img
                    loading="lazy"
                    src={"/landing/signin/Chouchou.png"}
                    alt="luffy"
                    className=""
                    width={35}
                    height={35}
                  />
                </div> */}
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
                    retry
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="relative mt-2"></div>
          <div className="relative text-zinc-300 text-sm font-medium mt-3 px-32 text-center opacity-90">
            If this issue persists even though you carry on retrying, maybe try
            this website in a different browser. If all fails, please try again
            at a later time.
          </div>
        </div>
      </div>
    </div>
  );
}
