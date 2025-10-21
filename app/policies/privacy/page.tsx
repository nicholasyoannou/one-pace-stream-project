import Image from "next/image";
import NavMenu from "@/app/navMenu";
import clsx from "clsx";
import Link from "next/link";
import * as globals from "@/app/globals";
import Footer from "@/app//footer";

export default function PrivacyPage() {
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
                  privacy policy
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
                Information about signing up to the project and data stored
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                In most of the projects I build, I try to make it as accessible,
                and as data-compliant and protective as much as possible. This
                means no ads, and no crappy giving data to third-parties. It's a
                platform for watching a community project; nobody deserves
                people mucking around with their info. On top of that it's
                probably something the One Pace team would hate to see, so I
                would not do it. This means the data server-stored is very
                minimal as much as possible. Most data would be stored locally
                as much as possible, and the only data that would be stored on
                the server is the data that is required to make the project
                work. Server-side stored data includes:
                <br></br>
                <br></br>
                <ul className="list-disc list-inside">
                  <li>
                    Activity on the platform so you can e.g. get back to the
                    episode you were watching. This data is clearable with one
                    button, so, if you want to delete your history, go for it.
                  </li>
                  <li>
                    Crunchyroll&reg; Premium account token (which is held
                    temporarily to establish a session to check if you have
                    Premium)
                  </li>
                  <li>
                    Your profile name (which would be used as your name when on
                    the One Pace: Stream platform)
                  </li>
                  <li>
                    Your Crunchyroll account identifiable (so, when you login
                    again, you can continue where you left off)
                  </li>

                  <li>
                    Any feedback you send (which is on an individual opt-in
                    basis)
                  </li>
                </ul>
                <br></br>
                Locally stored data though is a different matter and often
                varies depending on the content viewed. Sometimes cookies would
                be required in general to load assets, and temporarily store
                your account session. When you login, your browser would need to
                store accordingly the fact that you are logged in. This is a
                temporary session, and would be deleted when you logout.
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
                By using the platform you are agreeing to the Privacy Policy as
                well as the{" "}
                <Link
                  className="hover:text-blue-400 underline"
                  href={"/policies/terms"}
                >
                  Terms of Use
                </Link>
                . Please note that the Privacy Policy can be updated at any
                time. Data about your Crunchyroll&reg; account, or data using the
                platform, may be stored outside your geographical region.
                Specifically, Japan (which is used for storing data about your
                use of the platform, such as watch activity e.g. to remind you
                what part of the episode you were at so you can continue
                watching) and Canada (which is used by Quacksi, our partner to
                partially-authenticate users) are used to store data for the
                project, as well as users. There will be a 30-days notice before
                changes occur most likely via a site announcement. If you have
                any questions, please get in touch.
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
                Deletion of user data
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                If you want your data deleted, you can do that straight away
                from the One Pace: Stream platform account management menu.
                Please note that this'll delete all data from the servers, so
                you'd need to signup as a new user if you want to use the
                platform again. Data is NOT retained, and is deleted
                permanently. Please only use this if you are sure you want to
                delete your data. If you're still having issues, please get in
                touch.
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
