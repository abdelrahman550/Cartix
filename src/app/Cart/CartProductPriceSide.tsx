"use client";
import { Button } from "@/components/ui/button";
import { fraunces } from "@/Fonts";
import { Loader, Minus, Plus, Trash } from "lucide-react";
import { useContext, useState } from "react";
import { removeProductFromCart } from "../_actions/RemoveFromCartAction";
import { toast } from "sonner";
import { cartContext } from "../_context/CartContextProvider";
import { UpdateProductCount } from "../_actions/UpdateItemCountAction";

type props = { itemPrice: number; itemCount: number; productId: string };

export default function CartProductPriceSide({
  itemPrice,
  itemCount,
  productId,
}: props) {
  const { setCartItemsCount, setCartData } = useContext(cartContext);
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteProduct() {
    try {
      setIsLoading(true);
      const cartRes = await removeProductFromCart(productId);

      if (cartRes.status === "success") {
        toast.success(cartRes.message, {
          position: "top-right",
        });
        setCartItemsCount(cartRes.numOfCartItems);
        setCartData(cartRes);
      } else {
        toast.error(cartRes.message, {
          position: "top-right",
          richColors: true,
        });
      }
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Remove From Cart failed:", error);
      }

      toast.error("Something went wrong", {
        description: "Please try again later",
        position: "top-center",
        richColors: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleUpdateCount(id: string, count: number) {
    try {
      setIsLoading(true);
      const cartRes = await UpdateProductCount(id, count);

      if (cartRes.status === "success") {
        toast.success(cartRes.message, {
          position: "top-right",
        });
        setCartItemsCount(cartRes.numOfCartItems);
        setCartData(cartRes);
      } else {
        toast.error(cartRes.message, {
          position: "top-right",
          richColors: true,
        });
      }
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Updating Item From Cart:", error);
      }

      toast.error("Something went wrong", {
        description: "Please try again later",
        position: "top-center",
        richColors: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="relative flex flex-col justify-between gap-2">
      <div className="flex flex-col items-end gap-1">
        <span className="text-[11px] font-bold tracking-wide text-gray-400 uppercase">
          Quantity
        </span>
        <div className="flex h-8 w-28 items-center overflow-hidden rounded-[10px] border border-gray-300 bg-gray-100">
          <Button
            className="hover:text-crimson hover:bg-crimson-soft h-10 w-10 -translate-x-0.5 cursor-pointer rounded-none border border-gray-300 bg-gray-100 text-gray-700 transition"
            size={"icon"}
            onClick={() => handleUpdateCount(productId, itemCount - 1)}
            disabled={itemCount <= 1}
          >
            <Minus />
          </Button>
          <span className="flex h-10 w-10 items-center justify-center text-sm font-black">
            {itemCount}
          </span>
          <Button
            className="hover:text-crimson hover:bg-crimson-soft h-10 w-10 translate-x-0.5 cursor-pointer rounded-none border border-gray-300 bg-gray-100 text-gray-700 transition"
            size={"icon"}
            onClick={() => handleUpdateCount(productId, itemCount + 1)}
          >
            <Plus />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-1.5">
        <div className="flex flex-col gap-0 leading-4">
          <span className="text-[11px] font-bold tracking-wide text-gray-400 uppercase">
            Total
          </span>
          <div className="flex items-center gap-1">
            <span
              className={`${fraunces.className} text-lg font-bold tracking-tight text-black`}
            >
              {itemPrice * itemCount}
            </span>
            <span className="text-[11px] font-semibold tracking-tight text-gray-400">
              EGP
            </span>
          </div>
        </div>

        <Button
          aria-label="Remove-From-Cart"
          title="Remove-From-Cart"
          size="icon"
          className="hover:bg-crimson bg-crimson-soft border-crimson-border hover:border-crimson text-crimson h-11 w-11 cursor-pointer border transition hover:text-white"
          onClick={handleDeleteProduct}
        >
          <Trash />
        </Button>
      </div>
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 cursor-not-allowed flex-col items-center justify-center bg-transparent backdrop-blur-[1px]">
          <Loader className="text-crimson animate-spin" />
          <span
            className={`${fraunces.className} text-crimson text-sm font-bold`}
          >
            Updating...
          </span>
        </div>
      )}
    </div>
  );
}
