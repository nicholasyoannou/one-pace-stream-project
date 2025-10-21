// InfoBubble.js
import React from "react";
import * as globals from "@/app/globals";
import clsx from "clsx";

const InfoBubble = ({ text }) => {
  return (
    // <div
    //   className={clsx(
    //     styles.infoBubble,
    //     "pointer-events-none text-white font-medium text-[0.875rem]"
    //   )}
    // >
    //   {/* {text} */}
    // </div>
    // <div
    //   className={clsx(
    //     styles.infoBubble,
    //     "pointer-events-none absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-medium text-[0.875rem]"
    //   )}
    // >
    //   <p>indian curry</p>
    // </div>
    <div
      className={clsx(
        globals.navBarDestsLeft.className,
        `absolute top-0 w-full h-full bg-[#141519] shadow-sm flex items-center justify-center text-white transition-opacity ease-in-out duration-200 opacity-100`
      )}
      style={{ boxShadow: "0 0 0 var(0.75rem) #141519" }}
    >
      <p>Your text here</p>
    </div>
  );
};

export default InfoBubble;
