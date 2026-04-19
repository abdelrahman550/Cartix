import { fraunces } from "@/Fonts";
import React from "react";

import vegeThumbnail from "/@/images/marketThumbnail.jpg";
import fashionSthumbnail from "/@/images/fashion50.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function TodayBestDealsSec() {
  return (
    <div className="relative z-20 overflow-hidden border-b bg-gray-100 px-10 py-10">
      <div className="my-8 flex items-center justify-between">
        <div>
          <div className="relative ps-10">
            <p className="text-crimson text-xs font-bold uppercase">
              Limited Time
            </p>
            <div className="bg-crimson via-crimson to-crimson absolute top-1/2 left-0 h-1 w-8 -translate-y-1/2 rounded-xl bg-linear-to-r from-white"></div>
          </div>
          <h2 className="text-3xl font-extrabold">
            Today&apos;s Best{" "}
            <span className={fraunces.className + " text-crimson"}>Deals</span>
          </h2>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col items-center gap-6 lg:flex-row">
        <div className="group relative z-10 flex flex-col overflow-hidden rounded-2xl shadow-2xl backdrop-blur-3xl transition duration-300 hover:-translate-y-1">
          <div className="pointer-events-none absolute -bottom-12 -left-12 z-20 h-52 w-52 rounded-full bg-[#f5d07a]/10 blur-3xl"></div>
          <div className="relative h-60 z-30 w-full transition duration-300 group-hover:scale-105">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black/20 transition duration-300 group-hover:scale-105 z-10"></div>
            <Image
              src={vegeThumbnail}
              alt="Vegetables Thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="relative bg-[linear-gradient(135deg,#2a1a1d_0%,#3a151c_40%,#b23a48_100%)] px-7 py-6">
            <div className="bg-crimson-soft/5 absolute -right-24 -bottom-24 z-20 h-60 w-60 rounded-full"></div>
            <div className="bg-crimson-soft/8 absolute -top-28 -left-28 z-20 h-60 w-60 rounded-full"></div>
            <h4
              className={`${fraunces.className} mb-2.5 text-4xl font-bold text-white/85`}
            >
              Fresh Organic Fruits
            </h4>
            <p className="mb-6 max-w-2/3 font-medium text-white/70">
              Farm-fresh, hand-picked produce delivered straight to your door.
              Stock up and save big today only.
            </p>
            <div className="flex items-center gap-4">
              <span
                className={`${fraunces.className} text-3xl font-bold text-white drop-shadow-xl`}
              >
                40% OFF
              </span>
              <div>
                <span className="text-sm font-medium text-white/60">
                  Use Code:
                </span>{" "}
                <span className="text-gold text-sm font-bold">ORGANIC40</span>
              </div>
              <Button className="crimson-shadow-hover group flex h-12 cursor-pointer items-center gap-1 rounded-full bg-white px-6 text-lg font-bold text-black/75 transition hover:-translate-y-0.5 hover:bg-white/85">
                <span>Shop Now</span>
                <span className="transition group-hover:translate-x-1">
                  <ArrowRight strokeWidth={3} />
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="group relative z-10 flex flex-col overflow-hidden rounded-2xl shadow-2xl backdrop-blur-3xl transition duration-300 hover:-translate-y-1">
          <div className="pointer-events-none absolute -bottom-12 -left-12 z-20 h-52 w-52 rounded-full bg-[#f5d07a]/10 blur-3xl"></div>
          <div className="relative h-60 z-30 w-full transition duration-300 group-hover:scale-105">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black/20 transition duration-300 group-hover:scale-105 z-10"></div>
            <Image
              src={fashionSthumbnail}
              alt="Fashion Thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="relative bg-[linear-gradient(135deg,#0b0a08_0%,#17130f_50%,#5a4412_100%)] px-7 py-6">
            <div className="bg-crimson-soft/5 absolute -right-24 -bottom-24 z-20 h-60 w-60 rounded-full"></div>
            <div className="bg-crimson-soft/8 absolute -top-28 -left-28 z-20 h-60 w-60 rounded-full"></div>

            <h4
              className={`${fraunces.className} mb-2.5 text-4xl font-bold text-white/85`}
            >
              Big Fashion Drop Alert
            </h4>
            <p className="mb-6 max-w-2/3 font-medium text-white/70">
              Upgrade your wardrobe with the latest fashion trends — bold,
              minimal, and effortlessly you.
            </p>
            <div className="flex items-center gap-4">
              <span
                className={`${fraunces.className} text-3xl font-bold text-white drop-shadow-xl`}
              >
                50% OFF
              </span>
              <div>
                <span className="text-sm font-medium text-white/60">
                  Use Code:
                </span>{" "}
                <span className="text-gold text-sm font-bold">FASHION50</span>
              </div>
              <Button className="crimson-shadow-hover group flex h-12 cursor-pointer items-center gap-1 rounded-full bg-white px-6 text-lg font-bold text-black/75 transition hover:-translate-y-0.5 hover:bg-white/85">
                <span>Shop Now</span>
                <span className="transition group-hover:translate-x-1">
                  <ArrowRight strokeWidth={3} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
