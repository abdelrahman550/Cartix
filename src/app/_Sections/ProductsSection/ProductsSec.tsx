import { getAllProducts } from "@/services/products";
import ProductCard from "./ProductCard";
import ProductsSecTitle from "./ProductsSecTitle";

export default async function ProductsSec() {
  const products = await getAllProducts();

  return (
    <>
      <div className="bg-white px-10 py-10">
        <ProductsSecTitle />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} productData={product} />
          ))}
        </div>
      </div>
    </>
  );
}
