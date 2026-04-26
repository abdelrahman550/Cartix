"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSliderCategories from "./HeroSliderCategories";
export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="relative w-full">
      <button
        className="hover:text-crimson absolute top-1/2 left-1 z-10 hidden md:flex -translate-y-1/2 cursor-pointer items-center justify-center bg-transparent transition"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft size={60} strokeWidth={2} />
      </button>

      <button
        className="right-btn hover:text-crimson absolute top-1/2 right-4 z-10 hidden md:flex -translate-y-1/2 cursor-pointer items-center justify-center bg-transparent transition"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRight size={60} strokeWidth={2} />
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={false}
        pagination={{
          clickable: true,
          bulletActiveClass:
            "bg-black! hover:bg-crimson! transition opacity-100! w-5! rounded-2xl!",
        }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        <SwiperSlide>
          <HeroSliderCategories category="fashion" key={"Fashion"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSliderCategories category="market" key={"market"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSliderCategories category="electronics" key={"electronics"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
