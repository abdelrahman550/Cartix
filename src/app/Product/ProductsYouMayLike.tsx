"use client";
import { ProductResType } from "@/types/ProductResType";
import ProductCard from "../_Sections/ProductsSection/ProductCard";
import YouMayLikeTitle from "./YouMayLikeTitle";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

type ProductsYouMayLikeProps = {
  productId: string;
  products: ProductResType[];
  productCategory: string;
};

export default function ProductsYouMayLike({
  productId,
  products,
  productCategory,
}: ProductsYouMayLikeProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const filteredProducts = products
    .filter(
      (product) =>
        product.id !== productId && product.category?.name === productCategory,
    )
    .slice(0, 10);

  return (
    <>
      <div className="relative w-full px-6 md:px-14">
        <YouMayLikeTitle />

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={16}
          loop={true}
          navigation={false}
          modules={[Autoplay, Navigation]}
          style={{ paddingBlock: "12px" }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard productData={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-2.5 flex items-center justify-center gap-2">
          <button
            className="hover:bg-crimson hover:border-crimson z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:text-white"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft size={24} strokeWidth={2} />
          </button>

          <button
            className="hover:bg-crimson hover:border-crimson z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:text-white"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>
        </div>
      </div>
    </>
  );
}
