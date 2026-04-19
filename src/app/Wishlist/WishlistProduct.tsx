import { fraunces } from "@/Fonts";
import { ProductResType } from "@/types/ProductResType";
import { Dot } from "lucide-react";
import Image from "next/image";
import WishlistProductButtonsSide from "./WishlistProductButtonsSide";

export default function WishlistProduct({
  itemData,
}: {
  itemData: ProductResType;
}) {
  const finalPrice = itemData.priceAfterDiscount ?? itemData.price;
  const productId = itemData.id ?? 0;
  return (
    <div className="flex flex-col justify-between gap-3.5 rounded-2xl border border-gray-200 bg-white px-5 py-4 md:flex-row">
      <div className="flex gap-4">
        <div className="border-crimson/25 relative h-30 w-30 overflow-hidden rounded-lg border bg-gray-50">
          <Image
            src={itemData.imageCover}
            alt={itemData.title}
            fill
            sizes="120px"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col">
          <div className="hover:text-crimson mb-2 line-clamp-3 h-fit max-w-40 font-bold text-black transition md:max-w-80 lg:max-w-120">
            {itemData.title}
          </div>
          <div className="mb-1 flex items-center gap-2">
            <div className="w-fit rounded-full border border-gray-300 bg-gray-100 px-2 py-0.5 text-[10px] leading-4 font-bold tracking-wider text-gray-500 uppercase">
              {itemData.category.name}
            </div>
            <div className="border-green-border bg-green-soft text-green flex w-fit items-center gap-0.5 rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-wider">
              <span className="animate-pulse">
                <Dot size={10} strokeWidth={10} />
              </span>
              <span>In Stock</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className={`${fraunces.className} text-crimson text-xl font-bold tracking-tight uppercase`}
            >
              {finalPrice} EGP
            </span>
            {itemData.priceAfterDiscount && (
              <span className="mt-2 text-sm font-semibold text-gray-400 line-through">
                {itemData.priceAfterDiscount} EGP
              </span>
            )}
          </div>
        </div>
      </div>

      <WishlistProductButtonsSide productId={productId} />
    </div>
  );
}
