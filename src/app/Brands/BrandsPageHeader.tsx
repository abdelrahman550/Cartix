import { fraunces } from '@/Fonts'
import { ChevronRight, House } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BrandsPageHeader() {
  return (
    <div className="relative z-20 overflow-hidden bg-[linear-gradient(135deg,#070407_0%,#140009_40%,#a3001b_100%)] px-6 py-12 shadow-2xl backdrop-blur-lg md:px-14">
        <div className="bg-crimson-soft/8 absolute -top-28 -left-28 z-10 h-90 w-90 rounded-full"></div>
        <div className="bg-crimson-soft/5 absolute -right-24 -bottom-24 z-10 h-90 w-90 rounded-full"></div>

        <div className="relative z-20 flex items-center gap-2 text-sm font-semibold text-white/50 md:px-14">
          <Link
            href={"/"}
            className="hover:text-crimson flex items-center gap-1 transition"
          >
            <span>
              <House size={14} strokeWidth={3} />
            </span>
            <span>Home</span>
          </Link>
          <span>
            <ChevronRight size={14} strokeWidth={3} />
          </span>
          <Link href={"/"} className="hover:text-crimson transition">
            Shop
          </Link>
          <span>
            <ChevronRight size={14} strokeWidth={3} />
          </span>
          <span className="max-w-80 truncate rounded-full border border-white/50 bg-white/10 px-3 py-1 text-xs text-white transition">
            All Brands
          </span>
        </div>

        <div className="relative z-20 my-5 flex items-center justify-between">
          <div>
            <div className="relative mb-3 ps-10">
              <p className="text-xs font-bold text-white/70 uppercase">
                Explore
              </p>
              <div className="bg-crimson via-crimson to-crimson absolute top-1/2 left-0 h-1 w-8 -translate-y-1/2 rounded-xl bg-linear-to-r from-black/70"></div>
            </div>
            <h2
              className={`${fraunces.className} mb-4 text-4xl font-extrabold text-white`}
            >
              All <span className={"text-white/50"}>Brands</span>
            </h2>
            <p className="max-w-120 font-medium text-white/60">
              Explore our collection of trusted brands — featuring top names in fashion, electronics, and everyday essentials.
            </p>
          </div>
        </div>
      </div>
  )
}
