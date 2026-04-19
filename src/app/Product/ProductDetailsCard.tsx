import { ProductDetailsCardType } from '@/types/ProductDetailsCardType'
import React from 'react'

type props = {
    cardDetails : ProductDetailsCardType
}

export default function ProductDetailsCard({cardDetails} : props ) {
  return (
    <div className="hover:border-crimson-border flex flex-1 flex-col overflow-hidden rounded-[18px] border border-gray-300 bg-white transition hover:shadow-lg">
              <div className="flex items-center justify-between border-b border-gray-100 px-5 pt-4 pb-3.5">
                <span className="text-sm font-extrabold">
                  Product Information
                </span>
                <span className="rounded-full border border-gray-300 bg-gray-100 px-2.5 py-1 text-[10px] font-bold tracking-wide text-gray-400">
                  6 Specs
                </span>
              </div>
              <div className="group hover:bg-crimson-soft/50 flex items-center justify-between border-b border-gray-100 px-5 py-3.5 transition">
                <span className="text-xs font-semibold text-gray-500 transition group-hover:text-gray-700">
                  Category
                </span>
                <span className="group-hover:text-crimson text-[13px] font-bold text-gray-800 transition">
                  {cardDetails.categoryName}
                </span>
              </div>
              <div className="group hover:bg-crimson-soft/50 flex items-center justify-between border-b border-gray-100 px-5 py-3.5 transition">
                <span className="text-xs font-semibold text-gray-500 transition group-hover:text-gray-700">
                  Subcategory
                </span>
                <span className="group-hover:text-crimson text-[13px] font-bold text-gray-800 transition">
                  {cardDetails.subCategoryName}
                </span>
              </div>
              <div className="group hover:bg-crimson-soft/50 flex items-center justify-between border-b border-gray-100 px-5 py-3.5 transition">
                <span className="text-xs font-semibold text-gray-500 transition group-hover:text-gray-700">
                  Brand
                </span>
                <span className="group-hover:text-crimson text-[13px] font-bold text-gray-800 transition">
                  {cardDetails.brandName}
                </span>
              </div>
              <div className="group hover:bg-crimson-soft/50 flex items-center justify-between border-b border-gray-100 px-5 py-3.5 transition">
                <span className="text-xs font-semibold text-gray-500 transition group-hover:text-gray-700">
                  Items Sold
                </span>
                <span className="group-hover:text-crimson text-[13px] font-bold text-gray-800 transition">
                  {cardDetails.itemsSold + "+ sold"}
                </span>
              </div>
              <div className="group hover:bg-crimson-soft/50 flex items-center justify-between border-b border-gray-100 px-5 py-3.5 transition">
                <span className="text-xs font-semibold text-gray-500 transition group-hover:text-gray-700">
                  Returns
                </span>
                <span className="group-hover:text-crimson text-[13px] font-bold text-gray-800 transition">
                  30 Days
                </span>
              </div>
              <div className="group hover:bg-crimson-soft/50 flex items-center justify-between border-b border-gray-100 px-5 py-3.5 transition">
                <span className="text-xs font-semibold text-gray-500 transition group-hover:text-gray-700">
                  Eco Status
                </span>
                <span className="group-hover:text-crimson text-[13px] font-bold text-gray-800 transition">
                  Recyclable Packaging
                </span>
              </div>
            </div>
  )
}
