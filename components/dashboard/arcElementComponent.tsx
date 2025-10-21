"use client";

import NavMenu from "@/app/navMenu";
import * as React from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import FilterPopularityIcon from "@/public/assetMenu/v2/filterPopularityIcon.svg";
import FilterIcon from "@/public/assetMenu/v2/filterIcon.svg";
import * as globals from "@/app/globals";
import * as globalStyles from "@/components/mainNavMenu/styles.module.css";
import InfoBubble from "./infoBubble";
import { Textfit } from "react-textfit";
import CalenderIcon from "@/public/dashboard/assets/hoverIcons/calenderIcon.svg";
import ResolutionIcon from "@/public/dashboard/assets/hoverIcons/resolutionIcon.svg";
import EpisodeAnimePlaySource from "@/public/dashboard/assets/hoverIcons/episodeAnimePlaySource.svg";
import ClockDurationIcon from "@/public/dashboard/assets/hoverIcons/clockDurationIcon.svg";
import BookMangaIcon from "@/public/dashboard/assets/hoverIcons/bookMangaIcon.svg";
import PlayIcon from "@/public/dashboard/assets/hoverIcons/playIcon.svg";

export default function ArcElementComp(props: any) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative h-[350px] pb-2 ${
        // hover:bg-[#141519] transition-opacity duration-500 fade-in-out
        isHovered ? " opacity-100" : "opacity-100"
      }`}
      key={props.index}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/arc/${props.data.arcSlug}`}>
        <div
          className={`absolute transition-opacity duration-500 ${
            isHovered ? `gone-bg-opacity-80` : ""
          }`} // ${isHovered ? `bg-opacity-80` : ""}
        >
          <Image
            key={props.index}
            alt={props.data.altCover}
            loading="lazy"
            className={`object-cover object-center overflow-hidden h-[300px] ${
              isHovered ? "opacity-20" : "opacity-100"
            }`} // ${
            //     isHovered ? "opacity-0" : "opacity-100"
            //   }`
            src={`/dashboard/arcCoversSF/${props.data.altCover}`} //           src={`/landing/arcCovers/${data.arcCover}`}
            width={200}
            layout="responsive"
            height={300}
          />
          {/* Info about thingy */}
          <div
            className={`absolute top-0 w-full h-full bg-[#141519] shadow-sm flex flex-col text-left p-4 text-[#A0A0A0] transition-opacity ease-in-out duration-200 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{ boxShadow: "0 0 0 var(0.75rem) #141519" }}
          >
            <p
              className={clsx(
                "text-[0.6rem] font-bold uppercase leading-[1.2]",
                globals.navBarDestsLeft.className
              )}
            >
              ONE PACE
            </p>
            <p className="text-white pb-1">{props.data.arcTitle}</p>
            <div className="flex gap-[0.4rem] whitespace-nowrap items-center">
              <CalenderIcon className="flex-shrink-0" />
              <p
                className={clsx(
                  "text-[0.9rem] overflow-hidden",
                  globals.headinglanding.className
                )}
                style={{ textOverflow: "ellipsis" }}
              >
                Released {props.data.released}
              </p>
            </div>
            <div className="flex pt-1 gap-[0.4rem] whitespace-nowrap items-center">
              <ResolutionIcon className="flex-shrink-0" />
              <p
                className={clsx(
                  "text-[0.9rem] overflow-hidden justify-center",
                  globals.headinglanding.className
                )}
                style={{ textOverflow: "ellipsis" }}
              >
                {props.data.resolution}
              </p>
            </div>
            <div className="flex pt-1 gap-[0.4rem] whitespace-nowrap items-center">
              <EpisodeAnimePlaySource className="flex-shrink-0" />
              <p
                className={clsx(
                  "text-[0.9rem] overflow-hidden justify-center",
                  globals.headinglanding.className
                )}
                style={{ textOverflow: "ellipsis" }}
              >
                {props.data.animeEpisodes}
              </p>
            </div>
            <div className="flex pt-1 gap-[0.4rem] whitespace-nowrap items-center">
              <BookMangaIcon className="flex-shrink-0" />
              <p
                className={clsx(
                  "text-[0.9rem] overflow-hidden justify-center",
                  globals.headinglanding.className
                )}
                style={{ textOverflow: "ellipsis" }}
              >
                {props.data.mangaChapters}
              </p>
            </div>
            <div className="flex pt-1 gap-[0.4rem] whitespace-nowrap items-center">
              <ClockDurationIcon className="flex-shrink-0" />
              <p
                className={clsx(
                  "text-[0.9rem] overflow-hidden justify-center",
                  globals.headinglanding.className
                )}
              >
                {props.data.duration}
              </p>
            </div>
            <div
              className={`flex absolute bottom-0 pb-2 left-[0.5rem] opacity-80 w-full z-auto whitespace-nowrap items-center`}
            >
              <PlayIcon
                height={20}
                fill="#FF8533"
                width={20}
                className="h-6 w-6 flex-shrink-0"
              />
            </div>
          </div>
          {/* {isHovered && ( */}
          {/* <div className="absolute top-0 transform"> */}
          {/* <InfoBubble /> */}
          {/* props.data.arcDescription */}
          {/* </div> */}
          {/* )} */}

          <div
            className={`absolute top-0 right-[0rem] font-semibold bg-[#000000] text-white rounded-bl-lg w-6 h-6 flex items-center justify-center ${
              isHovered ? "opacity-0" : "opacity-100"
            }`} // ${ isHovered ? "opacity-0" : "opacity-100"    }
          >
            <Textfit>{props.data.arcNumber}</Textfit>
          </div>
          <div
            className={`absolute bottom-8 right-[0rem] font-semibold text-[0.875rem] bg-[#000000] text-[#fff] rounded-tl-lg w-[4.5rem] h-6 flex items-center justify-center ${
              isHovered ? "opacity-0" : "opacity-100"
            }`} // ${ isHovered ? "opacity-0" : "opacity-100"    }
          >
            <Textfit>{props.data.duration}</Textfit>
          </div>
          <p
            className={clsx(
              `text-white text-[0.875rem] font-medium text-left pt-2 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`, //     ${  isHovered ? "opacity-0" : "opacity-100" }
              globals.navBarDestsLeft
            )}
          >
            <Textfit mode="single" max={14}>
              {props.data.arcTitle}
            </Textfit>
          </p>
        </div>
      </Link>
    </div>
  );
}
