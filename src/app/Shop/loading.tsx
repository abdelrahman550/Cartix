import React from "react";
import ShopPageHeader from "./ShopPageHeader";
import ProductCardSkeleton from "../_Sections/ProductsSection/ProductCardSkeleton";

export default function loading() {
  return (
    <>
      <ShopPageHeader />{" "}
      <div className="grid grid-cols-1 gap-4 px-6 py-12 sm:grid-cols-2 md:grid-cols-3 md:px-14 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
      </div>
    </>
  );
}
