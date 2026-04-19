"use client";
import { Button } from "@/components/ui/button";
import { fraunces } from "@/Fonts";
import { Dot, Handbag, MoveRight } from "lucide-react";
import Image from "next/image";
import fashionImg from "../../assets/fashionThumbnail.jpg";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function FashionSlider() {
  return (
    <div className="to-crimson-soft flex min-h-[80vh] overflow-hidden bg-linear-to-br from-white lg:bg-linear-to-r">
      <div className="flex w-full items-center justify-center py-16 ps-0 pe-0 lg:w-1/2 lg:justify-start lg:ps-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            variants={item}
            className="flex w-full justify-center lg:justify-start"
          >
            <div className="bg-crimson-soft text-crimson border-crimson-mid mb-5 w-fit rounded-full border py-1.5 ps-2.5 pe-3.5 text-[11px] font-semibold">
              <div className="flex items-center gap-1">
                <span className="animate-pulse">
                  <Dot size={10} strokeWidth={10} />
                </span>
                <span>New Collection — Summer 2025</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <div
              className={
                fraunces.className +
                " mb-4 text-center text-6xl leading-16 font-semibold tracking-tight lg:text-start"
              }
            >
              <div>Fresh Style,</div>
              <div>Delivered to</div>
              <div className="text-crimson">Your Door</div>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <p className="mb-7 max-w-115 text-center text-[15px] text-gray-500 lg:max-w-102.5 lg:text-start">
              Get 20% off your first order. Thousands of curated products across
              fashion, groceries, electronics, and more.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <Button
                variant="default"
                className="bg-crimson hover:bg-crimson-dark group crimson-shadow-hover flex h-12 cursor-pointer items-center justify-center px-7 text-sm font-bold hover:-translate-y-0.5"
              >
                <span>Shop Now</span>
                <span>
                  <MoveRight
                    strokeWidth={3}
                    className="transition group-hover:translate-x-0.5"
                  />
                </span>
              </Button>

              <Button className="text-crimson border-crimson hover:bg-crimson-soft h-12 cursor-pointer border bg-white px-7 text-sm font-bold transition">
                View All Deals
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="hidden w-1/2 items-center justify-center lg:flex">
        <motion.div
          className="flex w-full justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex h-102.5 w-full items-center justify-center">
            <div className="relative h-102.5 w-4/5 overflow-hidden rounded-4xl shadow-xl">
              <div className="bg-crimson absolute top-6 right-6 z-10 flex h-16 w-16 flex-col items-center justify-center rounded-full font-extrabold text-white">
                <span className="leading-4">20%</span>
                <span className="text-[10px]">OFF</span>
              </div>
              <Image
                src={fashionImg}
                alt="Women's Fashion Thumbnail"
                fill
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>
            <div
              className={
                "bg-crimson absolute -bottom-8 left-0 flex h-16 items-center gap-2 rounded-2xl p-5 text-sm font-bold text-white"
              }
            >
              <span>
                <Handbag size={20} />
              </span>
              <span>Fashion Collection</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
