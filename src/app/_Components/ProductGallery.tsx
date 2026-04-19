"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

type Props = {
  images: string[];
};

export default function ProductGallery({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex h-full gap-3.5">
      <div className="h-18! cursor-pointer">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction="vertical"
          spaceBetween={10}
          slidesPerView="auto"
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Thumbs]}
          style={{ width: 72, height: images.length * 82 }}
        >
          {images.map((src, i) => (
            <SwiperSlide
              key={i}
              style={{ width: 72, height: 72 }}
              className="cursor-pointer"
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 12,
                  overflow: "hidden",
                  border: `1.5px solid ${activeIndex === i ? "#C8102E" : "#e5e7eb"}`,
                  boxShadow: activeIndex === i ? "0 0 0 3px #FEE8EC" : "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${i + 1}`}
                  width={72}
                  height={72}
                  className="h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
      className="flex-1 h-full rounded-[18px] overflow-hidden border border-gray-200 bg-white relative"
      >
        <Swiper
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={10}
          loop
          modules={[FreeMode, Thumbs]}
          style={{ width: "100%", height: "100%" }}
        >
          {images.map((src, i) => (
            <SwiperSlide
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="group relative h-full w-full">
                <Image
                  src={src}
                  alt={`Product image ${i + 1}`}
                  fill
                  className="object-contain p-5 transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        
      </div>
    </div>
  );
}
