import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import modStyles from "./styles.module.css";
import { useRouter } from "next/router";
import * as globals from "./globals";

export default function Footer() {
  return (
    <div>
      <div className="text-white text-xs self-stretch z-[1] w-full mt-32 max-md:max-w-full max-md:mt-10">
        One Pace, and Crunchyroll&reg; is not associated with the One Pace: Stream
        Project. All credits go to{" "}
        <a
          href="https://onepace.net/about"
          className="underline"
          target="_blank"
        >
          One Pace
        </a>{" "}
        for making One Pace through the long labour that went with it.
      </div>
      <div className="bg-opacity-30 self-stretch flex w-full items-stretch justify-between gap-5 py-1.5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-white text-xs whitespace-nowrap">
          &copy; {globals.year()} All rights respected. A Crunchyroll&reg; Premium
          account is required to access this project.
        </div>
        <div className="text-white text-right text-xs whitespace-nowrap">
          Created by nicholasdev in collaboration with Quacksi Technologies.
        </div>
      </div>
      <div className="flex gap-3 text-white text-center text-xs max-w-screen bg-stone-900 w-full justify-center items-center px-16 py-1 max-md:max-w-full max-md:px-5">
        <Link className="hover:underline" href={"/policies/privacy"}>
          <div className="hover:underline">Privacy Policy</div>{" "}
        </Link>
        <Link className="hover:underline" href={"/policies/terms"}>
          <div>Terms of Use</div>
        </Link>{" "}
        <Link className="hover:underline" href={"/about"}>
          <div>About</div>
        </Link>{" "}
      </div>
    </div>
  );
}
