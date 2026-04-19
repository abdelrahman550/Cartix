"use client";
import { Button } from "@/components/ui/button";
import { fraunces } from "@/Fonts";
import { Dot, MoveRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import marketImg from "/@/images/marketThumbnail.jpg";

import { motion, Variants } from "framer-motion";

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

export default function MarketSlider() {
  return (
    <div className="to-green-soft flex min-h-[80vh] overflow-hidden bg-linear-to-br from-white lg:bg-linear-to-r">
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
            <div className="bg-green-soft text-green border-green-border mb-5 w-fit rounded-full border py-1.5 ps-2.5 pe-3.5 text-[11px] font-semibold">
              <div className="flex items-center gap-1">
                <span className="animate-pulse">
                  <Dot size={10} strokeWidth={10} />
                </span>
                <span>Deal of the Day</span>
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
              <div>Farm Fresh</div>
              <div>Organic at</div>
              <div className="text-green">Best Prices</div>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <p className="mb-7 max-w-115 text-center text-[15px] text-gray-500 lg:max-w-102.5 lg:text-start">
              Farm-fresh fruits and vegetables delivered to your door. Up to 40%
              off on selected organic items today only.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <Button
                variant="default"
                className="bg-green hover:bg-green-dark group green-shadow-hover flex h-12 cursor-pointer items-center justify-center px-7 text-sm font-bold hover:-translate-y-0.5"
              >
                <span>Shop Grocery</span>
                <span>
                  <MoveRight
                    strokeWidth={3}
                    className="transition group-hover:translate-x-0.5"
                  />
                </span>
              </Button>

              <Button className="text-green border-green hover:bg-green-soft h-12 cursor-pointer border bg-white px-7 text-sm font-bold transition">
                Use Code: ORGANIC40
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
              <div className="bg-green absolute top-6 right-6 z-10 flex h-16 w-16 flex-col items-center justify-center rounded-full font-extrabold text-white">
                <span className="leading-4">40%</span>
                <span className="text-[10px]">OFF</span>
              </div>
              <Image
                src={marketImg}
                alt="Market Thumbnail"
                fill
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>
            <div
              className={
                "bg-green absolute -bottom-8 left-0 flex h-16 items-center gap-2 rounded-2xl p-5 text-sm font-bold text-white"
              }
            >
              <span>
                <ShoppingCart size={20} />
              </span>
              <span>Market Collection</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
