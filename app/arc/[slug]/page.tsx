import NavMenu from "@/app/navMenu";
import * as React from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import FilterPopularityIcon from "@/public/assetMenu/v2/filterPopularityIcon.svg";
import FilterIcon from "@/public/assetMenu/v2/filterIcon.svg";
import * as globals from "@/app/globals";
import * as globalStyles from "@/components/mainNavMenu/styles.module.css";
import { ArcCurve } from "three";
import ArcElement from "@/components/dashboard/arcElement";
import { LoadingArcElement } from "@/components/dashboard/arcElement";

export default function ArcSearch(props: any) {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <div className="flex flex-col">
        <div className="flex-col self-stretch relative h-auto flex items-stretch max-md:max-w-full">
          {/* <Image
                    loading="lazy"
                    alt="Crunchyroll hime"
                    width={1000}
                    height={2000}
                    src="/landing/signin/crunchyroll-hime-forest-winter-2024.jpg"
                    className="object-cover h-full w-full overflow-hidden shrink-0 max-w-full"
                /> */}
          <div className="h-auto w-full inset-0 bg-gradient-to-t from-transparent to-neutral-900">
            <div className="h-auto w-full bg-gradient-to-bl from-transparent to-neutral-900">
              <div className="flex self-center items-center text-center flex-col">
                <NavMenu />
                {/* PADDING TOP OF MORE THAN 70.5 REQUIRED OTHERWISE WILL BE BEHIND MENU */}
                <div className="px-32 h-auto w-full pt-[105.5px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
