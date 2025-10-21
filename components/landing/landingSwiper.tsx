"use client";
// Swiper for slideshow of arc photos
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import * as globals from "@/app/globals";
import React from "react";
import Image from "next/image";

export default function LandingSwiper() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const imGet = () => {
    return globals.arcImages.map((image, index) => (
      <SwiperSlide key={index}>
        <Image
          key={index}
          alt={image.replace(".png", "")}
          loading="lazy"
          className="object-cover object-center w-[136px] overflow-hidden h-[204px]"
          src={`/landing/arcCovers/${image}`}
          width={50}
          height={50}
        />
      </SwiperSlide>
    ));
  };
  const MyComponent = () => {
    return (
      <Swiper
        spaceBetween={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={11}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imGet()}
      </Swiper>
    );
  };

  return MyComponent();
}
