import { Button } from '@/components/ui/button'
import { fraunces } from '@/Fonts'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function YouMayLikeTitle() {
  return (
    <div className="mt-8 mb-4 flex items-center justify-between">
        <div>
          <div className="relative ps-10">
            <p className="text-crimson text-xs font-bold uppercase">Recommended</p>
            <div className="bg-crimson via-crimson to-crimson absolute top-1/2 left-0 h-1 w-8 -translate-y-1/2 rounded-xl bg-linear-to-r from-white"></div>
          </div>
          <h2 className="text-2xl font-extrabold">
            You May Also {" "}
            <span className={fraunces.className + " text-crimson"}>
              Like
            </span>
          </h2>
        </div>
        <div>
          <Button className="view-all-btn group">
            <span>View All Products</span>
            <span>
              <ArrowRight
                strokeWidth={3}
                className="group-hover:translate-x-0.5"
              />
            </span>
          </Button>
        </div>
      </div>
  )
}
