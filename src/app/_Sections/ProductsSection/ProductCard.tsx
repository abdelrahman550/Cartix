import { Button } from "@/components/ui/button";
import { ProductResType } from "@/types/ProductResType";
import { Eye, Flame, Share2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";
import AddToWishlistBtn from "./AddToWishlistBtn";

type props = {
  productData: ProductResType;
};

export default function ProductCard({ productData }: props) {
  return (
    <div className="crimson-shadow-hover group flex cursor-pointer flex-col rounded-2xl border bg-white transition hover:-translate-y-0.5">
      <div className="relative h-56 w-full overflow-hidden shadow-2xs">
        <Image
          sizes="(max-width: 640px) 100vw,
         (max-width: 768px) 50vw,
         (max-width: 1024px) 33vw,
         (max-width: 1280px) 25vw,
         20vw"
          src={productData.imageCover}
          alt={productData.title}
          fill
          className="object-contain"
        />
        {productData.priceAfterDiscount && (
          <div className="bg-crimson absolute top-2.5 left-2.5 flex items-center gap-1 rounded-2xl px-3 py-1 text-[11px] font-bold text-white">
            <span>HOT SALE</span>
            <span>
              <Flame size={12} />
            </span>
          </div>
        )}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-2">
          <AddToWishlistBtn productId={productData.id} />

          <Button
            aria-label="Share Product"
            title="Share Product"
            size="icon"
            className="hover:bg-crimson bg-crimson-soft/50 border-crimson-border hover:border-crimson text-crimson translate-x-12 cursor-pointer border transition delay-25 duration-200 group-hover:translate-x-0 hover:text-white"
          >
            <Share2 />
          </Button>
          <Link href={`/Product/${productData.id}`}>
            <Button
              aria-label="View Product"
              title="View Product"
              size="icon"
              className="hover:bg-crimson bg-crimson-soft/50 border-crimson-border hover:border-crimson text-crimson translate-x-12 cursor-pointer border transition delay-50 duration-200 group-hover:translate-x-0 hover:text-white"
            >
              <Eye />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1.5 text-[10px] font-bold text-gray-500 uppercase">
          {productData.category.name}
        </p>
        <p className="mb-2 line-clamp-2 font-bold">{productData.title}</p>
        <div className="mb-3.5 flex items-center gap-1">
          <div className="flex items-center text-yellow-400">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill={
                    i < Math.floor(productData.ratingsAverage)
                      ? "currentColor"
                      : "none"
                  }
                />
              ))}
          </div>
          <div className="flex gap-0.5 text-[10px] text-gray-500">
            <span>{productData.ratingsAverage}</span>
            <span>({productData.ratingsQuantity})</span>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="font-extrabold">
              {productData.priceAfterDiscount
                ? productData.priceAfterDiscount
                : productData.price}{" "}
              EGP
            </p>
            <p className="translate-y-0.5 text-xs font-bold text-gray-400 line-through">
              {productData.priceAfterDiscount && productData.price + " EGP"}
            </p>
          </div>

          <AddToCartBtn productId={productData.id} />
        </div>
      </div>
    </div>
  );
}
