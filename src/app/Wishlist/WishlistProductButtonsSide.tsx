"use client";
import { Button } from "@/components/ui/button";
import { Loader, ShoppingBag, Trash } from "lucide-react";
import { removeProductFromWishlist } from "../_actions/RemoveFromWishlistAction";
import { toast } from "sonner";
import { wishlistContext } from "../_context/wishlistContextProvider";
import { useContext, useState } from "react";
import { getUserWishlist } from "../_actions/GetUserWishlistAction";
import { cartContext } from "../_context/CartContextProvider";
import { addProductToCart } from "../_actions/AddToCartAction";
import { fraunces } from "@/Fonts";

export default function WishlistProductButtonsSide({
  productId,
}: {
  productId: string;
}) {
  const { setWishlistItemsCount, setWishlistData } =
    useContext(wishlistContext);

  const { setCartItemsCount, setCartData } = useContext(cartContext);
  const [addtoCartLoading, setAddtoCartLoading] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);

  async function handleRemoveFromWishlist() {
    try {
      setRemoveLoading(true);
      const wishlistRes = await removeProductFromWishlist(productId);

      if (wishlistRes.status === "success") {
        toast.success(wishlistRes.message, {
          position: "top-right",
        });
        setWishlistItemsCount(wishlistRes.data.length);
        const userWishlistData = await getUserWishlist();
        if (!userWishlistData) return;

        setWishlistItemsCount(userWishlistData.count);
        setWishlistData(userWishlistData);
      } else {
        toast.error(wishlistRes.message, {
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
      setRemoveLoading(false);
    }
  }

  async function handleAddToCart() {
    try {
      setAddtoCartLoading(true);
      const cartRes = await addProductToCart(productId);

      if (cartRes.status === "success") {
        toast.success(cartRes.message, {
          position: "top-right",
        });
        setCartItemsCount(cartRes.numOfCartItems);
        setCartData(cartRes);
        await handleRemoveFromWishlist();
      } else {
        if (cartRes.message === "Invalid Token. please login again") {
          toast.error("Please Login To Modify Your Cart", {
            position: "top-right",
            richColors: true,
          });
        } else {
          toast.error(cartRes.message, {
            position: "top-right",
            richColors: true,
          });
        }
      }
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Add to cart failed:", error);
      }

      toast.error("Something went wrong", {
        description: "Please try again later",
        position: "top-center",
        richColors: true,
      });
    } finally {
      setAddtoCartLoading(false);
    }
  }

  return (
    <div className="relative flex flex-row-reverse items-center justify-between gap-2 md:flex-col">
      {(addtoCartLoading || removeLoading) && (
        <div className="absolute top-1/2 left-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 cursor-not-allowed flex-col items-center justify-center bg-transparent backdrop-blur-[1px]">
          <Loader className="text-crimson animate-spin" />
          <span
            className={`${fraunces.className} text-crimson text-sm font-bold`}
          >
            Updating...
          </span>
        </div>
      )}
      <Button
        disabled={removeLoading}
        onClick={handleRemoveFromWishlist}
        aria-label="Remove-From-Wishlist"
        title="Remove-From-Wishlist"
        className="hover:bg-crimson bg-crimson-soft border-crimson-border hover:border-crimson text-crimson flex h-10 w-10 cursor-pointer items-center border text-xs font-bold transition hover:-translate-y-px hover:text-white hover:shadow-md md:self-end"
      >
        <span className="transition">
          {removeLoading ? (
            <Loader className="h-3.5! w-3.5! animate-spin" />
          ) : (
            <Trash className="h-3.5! w-3.5!" strokeWidth={3} />
          )}
        </span>
      </Button>
      <Button
        disabled={addtoCartLoading}
        onClick={handleAddToCart}
        className="hover:bg-crimson-dark bg-crimson border-crimson crimson-shadow-hover hover:border-crimson-dark flex h-10 cursor-pointer items-center border text-xs font-bold text-white transition hover:-translate-y-0.5"
      >
        <span className="transition">
          {addtoCartLoading ? (
            <Loader className="h-3.5! w-3.5! animate-spin" />
          ) : (
            <ShoppingBag className="h-3.5! w-3.5!" strokeWidth={3} />
          )}
        </span>
        <span className="transition">Add To Cart</span>
      </Button>
    </div>
  );
}
