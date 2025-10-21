"use client";

// For popup
import Box from "@mui/material/Box";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Modal from "@mui/material/Modal";

// React / Next libraries
import * as React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import * as globals from "@/app/globals";

const fillerPopupStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  boxShadow: 24,
};

export default function LandingDescPopup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      className={clsx(
        "text-white text-lg text-right mr-4 font-semibold self-stretch mt-1 max-md:max-w-full",
        globals.headinglanding.className
      )}
    >
      Watch One Piece via One Pace, removing{" "}
      <a className="underline hover:cursor-pointer" onClick={handleOpen}>
        fillers
      </a>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={fillerPopupStyle}>
          <LiteYouTubeEmbed title="Gintama explains filler" id="a4S9NuI6NKo" />
        </Box>
      </Modal>
      , and keeping all the parts that matter. One Pace is an endeavour to bring
      it more in line with the pacing of the original manga by Eiichiro Oda.
    </div>
  );
}
