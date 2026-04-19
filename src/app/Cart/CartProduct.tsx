import { fraunces } from "@/Fonts";
import { CartItemType } from "@/types/CartItemType";
import Image from "next/image";
import CartProductPriceSide from "./CartProductPriceSide";

type props = {
  itemData: CartItemType;
};

export default function CartProduct({ itemData }: props) {

  const itemPrice = itemData.price;
  const itemCount = itemData.count;
  const productData = itemData.product;  

  return (
    <div className="flex justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4">
      <div className="flex gap-4">
        <div className="border-crimson/25 relative h-30 w-30 overflow-hidden rounded-lg border bg-gray-50">
          <Image
            src={productData.imageCover}
            alt={productData.title}
            fill
            sizes="120px"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col">
          <div className="hover:text-crimson mb-1.5 text-[15px] font-bold text-black transition">
            {productData.title}
          </div>
          <div className="mb-1 w-fit  leading-4 rounded-full border border-gray-300 bg-gray-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                    {productData.category.name}
                  </div>
          <div className="flex items-center gap-1">
            <span
              className={`${fraunces.className} text-crimson text-lg font-bold tracking-tight uppercase`}
            >
              {itemPrice} EGP
            </span>
            <span className="mt-2 text-xs font-semibold text-gray-400">
              Per Unit
            </span>
          </div>
        </div>
      </div>

      <CartProductPriceSide itemPrice={itemPrice} itemCount={itemCount} productId={productData.id} />
    </div>
  );
}
