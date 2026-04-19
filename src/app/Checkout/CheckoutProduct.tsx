import { fraunces } from "@/Fonts";
import { CartItemType } from "@/types/CartItemType";
import Image from "next/image";
type props = {
  itemData: CartItemType;
};

export default function CheckoutProduct({ itemData }: props) {
  const productData = itemData.product
  const itemPrice = itemData.price * itemData.count
  
  return (
    <div className="flex items-center justify-between">
      <div className="relative h-15 w-15 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
        <Image
          src={productData.imageCover}
          alt={productData.title}
          fill
          sizes="60px"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="max-w-45 truncate text-[13px] font-semibold">
          {productData.title}
        </span>
        <div className="text-[11px] text-gray-500">{itemData.count} × {productData.price} EGP</div>
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="flex items-end justify-center gap-0.5">
          <span className={`${fraunces.className} font-bold tracking-tight`}>
            {itemPrice}
          </span>
          <span className="text-[10px] font-medium text-gray-500">EGP</span>
        </div>
      </div>
    </div>
  );
}
