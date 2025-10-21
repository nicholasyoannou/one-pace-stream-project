import NavMenu from "@/app/navMenu";
import { useRouter } from "next/router";
import Link from "next/link";
import * as React from "react";
import Footer from "@/app/footer";
import Image from "next/image";
import * as globals from "@/app/globals";
import clsx from "clsx";

export default function SignUpLanding() {
  return (
    // <div className="flex flex-col px-14 w-full items-stretch bg-[#141414]">
    <div className="bg-neutral-900 flex flex-col items-stretch">
      <div className="bg-neutral-900 flex w-full flex-col px-1 max-md:max-w-full">
        <div className="flex-col overflow-hidden self-stretch relative flex min-h-[485px] w-full items-stretch pt-3.5 max-md:max-w-full">
          <Image
            loading="lazy"
            alt="One Pace landing page background"
            src="/landing/signup/onepiecenewworldbg.jpg"
            width={1920}
            height={1080}
            className="absolute opacity-30 h-full w-full object-cover object-center inset-0"
          />

          <div className="absolute pt-[500px] w-full bg-gradient-to-b from-transparent to-neutral-900"></div>
          <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-transparent to-neutral-900">
            <div className="relative flex self-center items-center flex-col px-14">
              <NavMenu />
              <div className="fill-neutral-800 self-center text-center items-center mt-6 px-96 py-7 max-md:px-5">
                <div className="h-full w-auto inset-0 bg-[#212529] p-7 rounded-md">
                  <div
                    className={clsx(
                      "text-white text-2xl font-extrabold drop-shadow-md uppercase whitespace-nowrap",
                      globals.headinglanding.className
                    )}
                  >
                    SIGNUP TO OP: Stream project
                  </div>
                  <div
                    className={clsx(
                      "text-white text-center leading-6 drop-shadow-md text-lg font-medium self-stretch",
                      globals.headinglanding.className
                    )}
                  >
                    Welcome to One Pace: Stream Project. This project allows
                    anyone with a Crunchyroll&reg; Premium account to stream One
                    Pace in their browser without the fath of torrenting.
                    Telegram is available but lower quality, so this project was
                    made to allow people to stream it easily, and higher
                    quality.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-[1] flex w-full flex-col pb-1.5 max-md:max-w-full">
          <div className="flex gap-1 mt-3 self-start items-end">
            <div
              className={clsx(
                "text-white text-right text-[1.3rem] font-semibold grow px-5 whitespace-nowrap",
                globals.headinglanding.className
              )}
            >
              How does this project work?
            </div>
            <img
              src={"/landing/signup/child-monkey-d-luffy-512x512.png"}
              alt="Luffy what sticker"
              loading="lazy"
              className="aspect-square object-contain object-center w-[46px] overflow-hidden self-stretch max-w-full"
            />
          </div>
          <div className="self-stretch flex w-full items-stretch justify-between gap-0 pr-12 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <div
              className={clsx(
                "flex-col text-white font-medium relative bg-neutral-800 overflow-hidden min-h-[188px] grow justify-center items-stretch pl-8 pr-5 py-2.5 max-md:max-w-full max-md:pl-5",
                globals.headinglanding.className
              )}
            >
              The fact is, One Pace cuts One Piece down to make it easily
              watchable. One Pace is a community effort, and as such, isn't on
              Crunchyroll&reg;. Crunchyroll already hold the licenses for One
              Piece, and as One Pace is a cut down version... <br />
              <br />
              You see where I’m getting at?
              <br />
              <br />
              Problem is, Crunchyroll obviously won’t partner with a
              nobody-project (and yes, I’ve tried emailing them). So, how do you
              keep a community-effort accessible and also abiding by ethics at
              the same time? You make it so users login using their Crunchyroll
              account! If they’ve got Premium, they can watch One Piece, so they
              should be able to watch One Pace. Simple, right?
            </div>
            <div className="bg-slate-600 flex w-3 shrink-0 h-auto flex-col max-md:hidden" />
          </div>
          <div className="relative px-5 flex gap-1">
            <div className="text-white text-[1.3rem] font-semibold mt-3.5 max-md:max-w-full">
              {" "}
              Makes sense. So, how do I sign up?
            </div>
            <div className="top-0 right-[1210px]">
              <img
                loading="lazy"
                src={"/landing/signup/luffyletsgo.png"}
                alt="luffy"
                className=""
                width={54}
                height={54}
              />
            </div>
          </div>

          <div className="self-stretch relative flex w-full items-stretch justify-between gap-0 max-md:max-w-full max-md:flex-wrap">
            <div className="flex-col text-white text-base font-medium relative bg-neutral-800 overflow-hidden min-h-[151px] grow justify-center pl-8 pr-16 py-4 items-start max-md:max-w-full max-md:px-5">
              <span className="">How this works is you </span>
              <span className="italic">temporarily </span>
              <span className="">
                give access to your Crunchyroll account: a bot quickly checks if
                you have premium, and then logs out, no account credentials
                needed. Simple enough, right?
                <br />
                <br />
                If you don’t trust it, make a Crunchyroll alt-account, and see
                for yourself. As further proof, you can go into the Device
                Management tab of your CR Account and watch (if your able to see
                it anyway, this is done pretty quickly) a session made, and then
                log out.
              </span>
            </div>
          </div>
          <div className="flex flex-col ml-14 mt-6 self-center">
            <div
              className={clsx(
                "text-white text-center text-[1.35rem] font-semibold max-md:mr-2.5",
                globals.headinglanding.className
              )}
            >
              Anything else I need to know?
            </div>
            <div className="self-stretch max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[82%] ml-5 max-md:w-full max-md:ml-0">
                  <div
                    className={clsx(
                      "text-white text-[0.9rem] w-[560px] font-medium max-md:max-w-full max-md:mt-9",
                      globals.headinglanding.className
                    )}
                  >
                    <span className="font-bold">Nope, that’s it!</span>
                    <span className="font-medium">
                      {" "}
                      Only reason this page exists to let you know that such
                      process will happen. I don’t want a billion complaints
                      from people mentioning that “I don’t want someone else
                      knowing I’ve watched the whole of Konosuba 3 times over”.
                      And if your worried about privacy, head over to the {""}
                      <Link
                        className="underline hover:text-blue-400"
                        href={"/policies/privacy"}
                      >
                        Privacy Policy
                      </Link>{" "}
                      to check what data is processed. And I’m going to be
                      honest, in lamens terms for those people that don’t read
                      that: the only data processed is the only data needed to
                      get your account up and running - that’s it. For more info
                      about the project, head over to the{" "}
                      <Link className="hover:underline" href={"/about"}>
                        About
                      </Link>{" "}
                      page.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center flex gap-0 ml-16 mt-5 pr-3 items-end">
              <div className="bg-sky-500 hover:bg-sky-600 transition-all delay-[25ms] w-55 max-w-full w-[12rem] flex-col justify-center mt-3 rounded-xl self-start">
                <Link href={"/authorise/login"}>
                  <div
                    className="relative bg-sky-500 hover:bg-sky-600 hover:cursor-pointer transition-all delay-[25ms] flex gap-2 pl-2.5 pr-4 py-2.5 rounded-tl-[25px] rounded-tr-[1px]"
                    // style={{ borderRadius: "25px 25px 0 0" }}
                  >
                    <div className="absolute -top-[10px] right-4">
                      <img
                        loading="lazy"
                        src={"/landing/luffyyay.png"}
                        alt="luffy"
                        className=""
                        width={35}
                        height={35}
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
                        GET STARTED
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="pl-3 pr-3">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
