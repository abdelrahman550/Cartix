import React from "react";
import CategoriesPageHeader from "./CategoriesPageHeader";
import CategoryPageLoadingCard from "./CategoryPageLoadingCard";

export default function loading() {
  return (
    <>
      <CategoriesPageHeader />
      <div className="grid grid-cols-1 gap-4 px-6 py-12 sm:grid-cols-2 md:grid-cols-3 md:px-14 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <CategoryPageLoadingCard key={i} />
        ))}
      </div>
    </>
  );
}
