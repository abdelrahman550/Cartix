import React from "react";
import CategoriesSecTitle from "./CategoriesSecTitle";
import CategoryCardSkeleton from "./CategoryCardSkeleton";


export default function CategoriesSecSkeleton() {
  return (
    <div className="bg-crimson-soft/25 border-b px-10 py-10">
      <CategoriesSecTitle />
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (<CategoryCardSkeleton key={i} />))}
      </div>
    </div>
  );
}
