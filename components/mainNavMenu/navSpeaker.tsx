"use client";

import { useState } from "react";
import { Howl, Howler } from "howler";
import Image from "next/image";

const random = ["/sounds/franky.mp3", "/sounds/sanji.mp3", "/sounds/30.mp3"];
const actualrandom = random[Math.floor(Math.random() * random.length)];

// randomise array
const randomNew = random.sort(() => Math.random() - 0.5);

var sound = new Howl({
  src: randomNew,
  volume: 0.5,
});

export default function Speaker() {
  const [playState, setOtherPlayState] = useState(true);
  const [noListOn, setNoListOn] = useState(1);

  const handleClick = () => {
    // Update the image link to a different one
    setOtherPlayState(!playState);

    if (sound.playing()) {
      sound.stop();
    } else {
      sound.play();
    }
  };

  // when howler has finished playing a song, play next song in array
  try {
    sound.on("end", function () {
      sound.stop();
      setNoListOn(noListOn + 1);
      // load different song from array
      sound = new Howl({
        src: randomNew[noListOn],
        volume: 0.5,
      });
      sound.load();
      sound.play();
    });
  } catch (error) {}

  return (
    <a>
      <Image
        src={`/assetMenu/${playState ? "speaker-0" : "speaker-2"}.svg`}
        alt="Music"
        width={25}
        height={25}
        onClick={handleClick}
        className="hover:cursor-pointer rounded-sm bg-white fill-white outline-white"
      />
    </a>
  );
}
