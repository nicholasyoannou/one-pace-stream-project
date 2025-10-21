import Image from "next/image";
import NavMenu from "@/app/navMenu";
import clsx from "clsx";
import Link from "next/link";
import * as globals from "@/app/globals";
import Footer from "@/app//footer";

export default function TermsPage() {
  return (
    <div>
      <div className="bg-neutral-900 flex flex-col items-stretch">
        <div className="bg-neutral-900 flex w-full flex-col px-1 max-md:max-w-full">
          <div className="flex-col overflow-hidden self-stretch relative flex min-h-[300px] w-full items-stretch pt-3.5 max-md:max-w-full">
            <Image
              loading="lazy"
              alt="One Piece Going Merry"
              src="/landing/onepiece_bgarabasta.png"
              width={1920}
              height={1080}
              className="absolute opacity-30 h-full w-full object-cover object-center inset-0"
            />

            <div className="absolute pt-[500px] w-full bg-gradient-to-b from-transparent to-neutral-900"></div>
            <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-transparent to-neutral-900">
              <div className="relative flex self-center items-center text-center flex-col px-14">
                <NavMenu />
                <div
                  className={clsx(
                    "text-white text-6xl py-24 mb-52 font-extrabold drop-shadow-xl uppercase whitespace-nowrap",
                    globals.headinglanding.className
                  )}
                >
                  terms of use
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900 h-auto">
            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <p className="pt-20 pb-1 opacity-80 italic text-white text-base">
                [Last updated at 18:16GMT 11/12/2023]
              </p>
              <div
                className={
                  "text-white text-xl font-bold uppercase whitespace-nowrap"
                }
              >
                Information about the One Pace: Stream project
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                One Pace: Stream project is a project that officially went into
                development on the 3rd December 2023. For more information about
                the project, please visit the{" "}
                <Link className="hover:text-blue-300 underline" href={"/about"}>
                  About page
                </Link>
                . This page is to inform you about the terms of use of using the
                project, and notifying you of certain specifics about rights to
                the content. If you want to know the privacy policy, please
                visit{" "}
                <Link
                  className="hover:text-blue-300 underline"
                  href={"/policies/privacy"}
                >
                  that page
                </Link>
                . This page is subject to change at any time, and due to the
                privacy policy, I do not like storing personally identifiable
                information, so notifying users of changes will be done via a
                site announcement, which'll be displayed at the top of the site,
                if any. Please check back regularly to see if anything has
                changed.
              </div>
            </div>

            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <div
                className={
                  "text-white text-xl pt-6 font-bold uppercase whitespace-nowrap"
                }
              >
                Agreeing to the terms of use
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                By agreeing to the Terms of Use, you agree that you will not
                hold the project, or the people involved in creating the
                project, liable in any way, and that you will not use the
                project for any illicit purposes. By agreeing to the Terms of
                Use, you also agree to the{" "}
                <Link
                  className="hover:text-blue-300 underline"
                  href={"/policies/privacy"}
                >
                  Privacy Policy
                </Link>
                . The project implements Crunchyroll&reg;, which is a platform
                owned by Sony. They also have seperate terms and conditions, and
                their own privacy policy. By using this project you are also
                making sure that you also acknowledge to their Terms of Use and
                Privacy Policy as well. This project also uses Cloudflare&reg; for
                security purposes, using their Turnstile product as a
                privacy-friendly CAPTCHA solution when undergoing security
                anti-bot checks. There are also other third-parties that are
                used for the project to work, which are listed in these terms.
                If you have any questions, please get in touch.
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <div
                className={
                  "text-white text-xl pt-6 font-bold uppercase whitespace-nowrap"
                }
              >
                Third-parties & relations to the project
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                By agreeing to the Terms of Use, as stated above, there are many
                third-parties which are used for security-purposes (to make sure
                the project is not abused by bad-actors), and to make sure the
                platform is being used in a fair manor. As well as this, there
                are other third-parties used which have their own Terms and
                policies which you might want to be aware of. Their purpose with
                the project, and their relation to the project is listed below.
                <br></br>
                <br></br>
                <ul className="list-disc list-inside">
                  <li>
                    As already mentioned, Cloudflare&reg; Turnstile is used for
                    security to validate sessions - this is to make sure that
                    requests are coming from an individual and not a robot.
                    Crunchyroll&reg; is also used to authenticate users to make
                    sure they have Premium before letting them access the
                    platform.
                  </li>
                  <li>
                    Redis database in Japan used to temporarily store security
                    tokens in purpose for the login page. These tokens have a 6
                    minute expiry time, and do not store personally identifiable
                    information.
                  </li>
                  <li>
                    Quacksi Technologies SSO product is used to authenticate the
                    user after Crunchyroll Premium is verified. This is stored
                    in Canada.
                  </li>
                  <li>
                    Amazon Web Services (AWS) database in Japan, which is used
                    to store the links between Crunchyroll and your Quacksi SSO
                    account. It's also used to store data about use of the
                    platform, such as e.g. episodes you got halfway through,
                    storing the point so you can continue where you left off.
                    AWS is NOT used to store any personally identifiable
                    information.
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <div
                className={
                  "text-white text-xl pt-6 font-bold uppercase whitespace-nowrap"
                }
              >
                Relations with Quacksi Technologies
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                Quacksi Technologies is a close partner and provides partial
                authentication for the project. Because of this, they have to
                store data. They do not have a privacy policy, because they just
                provide products to partners like us. So, they just believe our
                own Terms and Privacy applies. We know these people in-person,
                as every project involved with Quacksi needs that requirement.
                They serve community causes, and provide tech products. We're
                still pretty much responsible for all data stored, not Quacksi,
                as they just provide tech products, and don't necessarily get{" "}
                <span className="italic">too</span> involved: they just leave a
                lending hand. If you have any questions, please get in touch.
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <div
                className={
                  "text-white text-xl pt-6 font-bold uppercase whitespace-nowrap"
                }
              >
                Use of the platform
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                You need a Crunchyroll Premium account to access the project.
                Please at least pay for it in ways you can. CR even implemented
                regional pricing to make it cheaper for people in other
                countries, so more people can access anime. This account is used
                throughout the platform to keep your activity synced. If you
                login with a different Crunchyroll account, your activity from
                your other account will not be there. If you want to change your
                account, please logout and login with the new account.
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <div
                className={
                  "text-white text-xl pt-6 font-bold uppercase whitespace-nowrap"
                }
              >
                Contacting the project
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                Users of course have the right to contact the project peeps if
                they have account problems, or any other issues. In the event
                you'd like to present feedback to improve the platform, or you'd
                just like to comment on the about page (haha), please get in
                touch with Quacksi, and they'll forward the query over to me,
                the project peep. Quacksi can be contacted at the following
                email: quacksi@autistici.org. Please note that Quacksi is not
                obligated to forward over every request, and our email providers
                do have problems from time to time, which may result in your
                email maybe not being received.
              </div>
            </div>

            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <div
                className={
                  "text-white text-xl pt-6 font-bold uppercase whitespace-nowrap"
                }
              >
                Rights to the content, creators, and relevant rightsholders
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                One Piece is owned by Eiichiro Oda/Shueisha, and animated by
                Toei Animation. One Pace is a fan-made project that edits the
                One Piece anime to follow the manga more closely. There is
                nothing to stop that from being a fact. Crunchyroll bought the
                license for One Piece, and so, is the sole distributor of One
                One Piece in the west. This is a community project helping One Pace
                get the attention it deserves, and is not at all affliated with
                Crunchyroll&reg;, nor One Pace in any way. To access any contents
                on this project, you need a Crunchyroll&reg; Premium account. This
                project helps promote people paying for anime in ways of it's
                own, and also has an aim to establish a partnership with
                Crunchyroll if it can. As such, this project breaking copyright
                is a weird thing to say regarding you need a Crunchyroll
                account, with a Premium subscription, in the first place.
                <br></br>
                <br></br> Throughout this site, assets may have been used that
                belong to other creators, or authors. Wherever I can I've tried
                to credit the author by either hyperlinking the work, or
                referencing it somewhere else on this site. If you are an author
                of said-works and no longer want this on this site or think
                there's missing accreditation, please get in touch.
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <div
                className={
                  "text-white text-xl pt-6 font-bold uppercase whitespace-nowrap"
                }
              >
                Information for relevant rightsholders
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                If your a relevant rightsholder, please get in touch. Especially
                if your Crunchyroll&reg;/Sony&reg;. Specifically the author of One Piece,
                Eiichiro Oda, can shut this down if he so decides. If you are
                Eiichiro Oda, and no longer want this project existing, please
                get in touch. But please read the work that's gone into One Pace
                and about this project before making a final decision. People
                need a Crunchyroll Premium account in the first place, who have
                the licensing for One Piece, to access this project. Thank you.
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <Footer />
        </div>
      </div>
    </div>
  );
}
