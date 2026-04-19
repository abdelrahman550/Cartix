import React from "react";
import ShopPageHeader from "./ShopPageHeader";
import ProductCard from "../_Sections/ProductsSection/ProductCard";
import { getAllProducts } from "@/services/products";

export default async function page() {
  const products = await getAllProducts();
  return (
    <>
      <ShopPageHeader />
      <div className="grid grid-cols-1 gap-4 px-6 py-12 sm:grid-cols-2 md:grid-cols-3 md:px-14 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </div>
    </>
  );
}
