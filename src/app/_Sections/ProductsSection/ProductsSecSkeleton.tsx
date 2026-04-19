import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductsSecTitle from "./ProductsSecTitle";

export default function ProductsSecSkeleton() {
  return (
    <div className="bg-white px-10 py-10 w-full">
      <ProductsSecTitle />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (<ProductCardSkeleton key={i} />))}
      </div>
    </div>
  );
}
