import Image from "next/image";
import NavMenu from "@/app/navMenu";
import clsx from "clsx";
import Link from "next/link";
import * as globals from "@/app/globals";
import Footer from "@/app//footer";
import { data } from "./notfound";

export default function notFound() {
  // Get random elem from data.data
  const randomElem = data.data[Math.floor(Math.random() * data.data.length)];
  const randomElemImage = randomElem.image;
  const randomElemQuote = randomElem.quote;
  const randomElemLink = randomElem.href;
  return (
    <div className="bg-neutral-900 min-h-screen">
      <div className=" flex flex-col items-stretch">
        <div className="bg-neutral-900 flex w-full flex-col px-1 max-md:max-w-full">
          <div className="flex-col overflow-hidden self-stretch relative flex min-h-[150px] w-full items-stretch pt-3.5 max-md:max-w-full">
            <div className="absolute pt-[500px] w-full bg-gradient-to-b from-transparent to-neutral-900"></div>
            <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-transparent to-neutral-900">
              <div className="relative flex self-center items-center text-center flex-col px-14">
                <NavMenu />
              </div>
            </div>
          </div>
          <div className="items-center self-center snap-center text-center">
            <div
              className={
                "text-white font-mono pb-3 pt-3 text-xl font-semibold uppercase"
              }
            >
              Error 404: Page Not Found
            </div>

            <Link href={randomElemLink}>
              <Image
                loading="lazy"
                alt="Zoro Lost Again"
                className="object-cover"
                src={`/landing/error/404/${randomElemImage}`}
                height={512}
                width={512}
              />
            </Link>
          </div>
          <div className="items-center self-center snap-center text-center">
            <div
              className={
                "text-white font-mono pt-3 text-xl font-semibold uppercase"
              }
            >
              {randomElemQuote}
            </div>
            <div
              className={
                "text-blue-200 hover:underline font-mono text-base pt-2 px-40"
              }
            >
              <Link href={"/"}>
                Go back to Home Page
                {" > "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
