import NavMenu from "../navMenu";
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

export default function Browse(props: any) {
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
                <div className="px-32 h-auto w-full pt-[105.5px]">
                  <div className="flex flex-row justify-between h-auto w-auto">
                    <div
                      id="Title"
                      className={clsx(
                        "text-2xl font-semibold text-white",
                        globals.headinglanding.className
                      )}
                    >
                      Browse Arcs
                    </div>
                    <div className="flex">
                      <div
                        className="hover:bg-[#23252B] transition-colors h-auto items-stretch flex relative"
                        style={{ alignItems: "center" }}
                      >
                        <Link
                          className="h-full w-full flex px-3 py-3"
                          style={{ alignItems: "center" }}
                          href={"/browse"}
                        >
                          <div
                            className={clsx(
                              "flex text-white text-base font-semibold pr-3",
                              globalStyles.erc
                            )}
                            style={{ alignItems: "center" }}
                          >
                            <FilterPopularityIcon fill="#dadada" />
                            <br />
                          </div>
                          <div
                            className={clsx(
                              "hover:text-white text-base text-opacity-80 font-semibold text-[#DADADA]",
                              globals.headinglanding.className
                            )}
                            style={{ alignItems: "center" }}
                          >
                            POPULARITY
                            <br />
                          </div>
                        </Link>
                      </div>
                      <div
                        className="hover:bg-[#23252B] transition-colors h-auto items-stretch flex relative"
                        style={{ alignItems: "center" }}
                      >
                        <Link
                          className="h-full w-full flex px-3 py-3"
                          style={{ alignItems: "center" }}
                          href={"/browse"}
                        >
                          <div
                            className={clsx(
                              "flex text-white text-base font-semibold pr-3",
                              globalStyles.erc
                            )}
                            style={{ alignItems: "center" }}
                          >
                            <FilterIcon fill="#dadada" />
                            <br />
                          </div>
                          <div
                            className={clsx(
                              "hover:text-white uppercase text-base text-opacity-80 font-semibold text-[#DADADA]",
                              globals.headinglanding.className
                            )}
                            style={{ alignItems: "center" }}
                          >
                            Filter
                            <br />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-x-[1.875rem] pt-5 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-6 sm:gap-4 md:gap-6 lg:gap-8 pb-5">
                    <ArcElement />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
