import React from 'react'
import BrandsPageHeader from './BrandsPageHeader'
import { getAllBrands } from '@/services/brands'
import BrandPageCard from './BrandPageCard'

export default async function page() {
     const brands = await getAllBrands()
  return (
    <>
    <BrandsPageHeader />

    <div className="grid grid-cols-1 gap-4 px-6 py-12 sm:grid-cols-2 md:grid-cols-3 md:px-14 lg:grid-cols-4 xl:grid-cols-5">
            {brands.map((brand) => (
              <BrandPageCard key={brand._id} brandData={brand} />
            ))}
          </div>
    </>
  )
}
