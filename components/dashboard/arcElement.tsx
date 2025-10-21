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
import ArcElementComp from "./arcElementComponent";

export default function ArcElement(props: any) {
  const [arcData, setArcData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (arcData.length === 0) {
      fetch("/api/dashboard/arcs")
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setArcData(data);
        });
    }
  }, [arcData]);

  if (isLoading) {
    return <LoadingArcElement />;
  }

  return arcData.map((data, index) => (
    <ArcElementComp key={index} index={index} data={data} />
  ));
}

export function LoadingArcElement() {
  return (
    <>
      <div className="relative">
        <div className="animate-pulse bg-gray-700 h-[300px] w-[200px]"></div>
        <div className="animate-pulse bg-gray-700 h-[1.25rem] w-[200px] mt-2"></div>
      </div>
      <div className="relative">
        <div className="animate-pulse bg-gray-700 h-[300px] w-[200px]"></div>
        <div className="animate-pulse bg-gray-700 h-[1.25rem] w-[200px] mt-2"></div>
      </div>
      <div className="relative">
        <div className="animate-pulse bg-gray-700 h-[300px] w-[200px]"></div>
        <div className="animate-pulse bg-gray-700 h-[1.25rem] w-[200px] mt-2"></div>
      </div>
      <div className="relative">
        <div className="animate-pulse bg-gray-700 h-[300px] w-[200px]"></div>
        <div className="animate-pulse bg-gray-700 h-[1.25rem] w-[200px] mt-2"></div>
      </div>
      <div className="relative">
        <div className="animate-pulse bg-gray-700 h-[300px] w-[200px]"></div>
        <div className="animate-pulse bg-gray-700 h-[1.25rem] w-[200px] mt-2"></div>
      </div>
    </>
  );
}
