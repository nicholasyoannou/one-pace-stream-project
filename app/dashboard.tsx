import NavMenu from "./navMenu";
import * as React from "react";
import Image from "next/image";

export default function Dashboard(props: any) {
  return (
    <div className="bg-neutral-900 flex flex-col items-stretch">
      <div className="flex-col overflow-hidden self-stretch relative h-screen flex min-h-[100px] items-stretch max-md:max-w-full">
        <Image
          loading="lazy"
          alt="Crunchyroll hime"
          width={1000}
          height={2000}
          src="/landing/signin/crunchyroll-hime-forest-winter-2024.jpg"
          className="object-cover h-full w-full overflow-hidden shrink-0 max-w-full"
        />
        <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-transparent to-neutral-900">
          <div className="absolute h-full w-full bg-gradient-to-bl from-transparent to-neutral-900">
            <div className="relative flex self-center items-center text-center flex-col">
              <NavMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
