import { fraunces } from '@/Fonts'
import { Sparkles } from 'lucide-react'
import React from 'react'
import PageIntroCards from './PageIntroCards'
import PageIntroTiles from './PageIntroTiles'

export default function PageIntro() {
  return (
    <div className="w-full xl:max-w-150">
          <div className="shadow-crimson-mid bg-crimson mb-3 flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold tracking-wide text-white shadow-lg">
            <span>
              <Sparkles size={18} />
            </span>
            <span>The Next-Gen Marketplace</span>
          </div>

          <div
            className={`${fraunces.className} mb-4 text-[42px] leading-10 font-bold tracking-[-2px]`}
          >
            Cart<span className="text-crimson">ix</span>
          </div>

          <h1
            className={`${fraunces.className} mb-3 w-fit text-4xl font-semibold tracking-tight md:text-5xl`}
          >
            <div>Everything</div>
            <div>You Need.</div>
            <div className="bg-linear-to-r from-[#8a1024] via-[#d61f3c] to-[#ff375c] bg-clip-text text-transparent">
              Without Limits.
            </div>
          </h1>
          <p className="mb-6 max-w-md text-sm text-gray-600 md:text-base">
            Explore products, compare prices, and shop effortlessly in one
            unified marketplace designed for speed and smarter choices.
          </p>
          <PageIntroCards />
          <PageIntroTiles />
        </div>
  )
}
