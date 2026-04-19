import { Check, CircleCheckBig, Hexagon, RotateCcw, Shield } from 'lucide-react'
import React from 'react'

export default function DetailsFeatsCard() {
  return (
    <div className="hover:border-crimson-border flex flex-1 flex-col overflow-hidden rounded-[18px] border border-gray-300 bg-white transition hover:shadow-lg">
              <div className="flex items-center justify-between border-b border-gray-100 px-5 pt-4 pb-3.5">
                <span className="text-sm font-extrabold">Key Features</span>
                <span className="rounded-full border border-gray-300 bg-gray-100 px-2.5 py-1 text-[10px] font-bold tracking-wide text-gray-400">
                  5 features
                </span>
              </div>

              <div className="flex flex-col h-full justify-between">
                <div className="group hover:bg-crimson-soft/50 px-5 py-3.5 transition">
                <div className="flex items-center gap-3">
                  <span className="group-hover:bg-crimson group-hover:border-crimson text-green bg-green-soft border-green-border flex h-7 w-7 items-center justify-center rounded-[8px] border transition group-hover:text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="group-hover:text-crimson text-sm font-semibold transition">
                    Premium Quality Product
                  </span>
                </div>
              </div>
              <div className="group hover:bg-crimson-soft/50 px-5 py-3.5 transition">
                <div className="flex items-center gap-3">
                  <span className="group-hover:bg-crimson group-hover:border-crimson text-green bg-green-soft border-green-border flex h-7 w-7 items-center justify-center rounded-[8px] border transition group-hover:text-white">
                    <Shield size={14} strokeWidth={3} />
                  </span>
                  <span className="group-hover:text-crimson text-sm font-semibold transition">
                    100% Authentic Guarantee
                  </span>
                </div>
              </div>
              <div className="group hover:bg-crimson-soft/50 px-5 py-3.5 transition">
                <div className="flex items-center gap-3">
                  <span className="group-hover:bg-crimson group-hover:border-crimson text-green bg-green-soft border-green-border flex h-7 w-7 items-center justify-center rounded-[8px] border transition group-hover:text-white">
                    <Hexagon size={14} strokeWidth={3} />
                  </span>
                  <span className="group-hover:text-crimson text-sm font-semibold transition">
                    Safe & Secure Packaging
                  </span>
                </div>
              </div>
              <div className="group hover:bg-crimson-soft/50 px-5 py-3.5 transition">
                <div className="flex items-center gap-3">
                  <span className="group-hover:bg-crimson group-hover:border-crimson text-green bg-green-soft border-green-border flex h-7 w-7 items-center justify-center rounded-[8px] border transition group-hover:text-white">
                    <CircleCheckBig size={14} strokeWidth={3} />
                  </span>
                  <span className="group-hover:text-crimson text-sm font-semibold transition">
                    Quality Tested
                  </span>
                </div>
              </div>
              <div className="group hover:bg-crimson-soft/50 px-5 py-3.5 transition">
                <div className="flex items-center gap-3">
                  <span className="group-hover:bg-crimson group-hover:border-crimson text-green bg-green-soft border-green-border flex h-7 w-7 items-center justify-center rounded-[8px] border transition group-hover:text-white">
                    <RotateCcw size={14} strokeWidth={3} />
                  </span>
                  <span className="group-hover:text-crimson text-sm font-semibold transition">
                    Easy Returns Accepted
                  </span>
                </div>
              </div>
              </div>
            </div>
  )
}
