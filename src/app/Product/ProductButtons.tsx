"use client";
import { Button } from "@/components/ui/button";
import { Heart, Loader, Share2, ShoppingBag, Zap } from "lucide-react";
import React, { useContext, useState } from "react";
import { cartContext } from "../_context/CartContextProvider";
import { addProductToCart } from "../_actions/AddToCartAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { wishlistContext } from "../_context/wishlistContextProvider";
import { addProductToWishlist } from "../_actions/addToWishlistAction";
import { getUserWishlist } from "../_actions/GetUserWishlistAction";
import { removeProductFromWishlist } from "../_actions/RemoveFromWishlistAction";

export default function ProductButtons({ productId }: { productId: string }) {
  const router = useRouter();

  const { setCartItemsCount, setCartData } = useContext(cartContext);
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const { setWishlistItemsCount, setWishlistData } =
    useContext(wishlistContext);
  const [addToWishlistLoading, setAddToWishlistLoading] = useState(false);
  const [isWished, setIsWished] = useState(false);

  async function handleAddToCart() {
    try {
      setAddToCartLoading(true);
      const cartRes = await addProductToCart(productId);

      if (cartRes.status === "success") {
        toast.success(cartRes.message, {
          position: "top-right",
        });
        setCartItemsCount(cartRes.numOfCartItems);
        setCartData(cartRes);
        return true;
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

          return false;
        }
      }
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Add to cart failed:", error);
        return false;
      }

      toast.error("Something went wrong", {
        description: "Please try again later",
        position: "top-center",
        richColors: true,
      });
    } finally {
      setAddToCartLoading(false);
    }
  }

  async function handleBuyNow() {
    const success = await handleAddToCart();

    if (success) {
      router.push("/Cart");
    }
  }

  async function handleAddToWishlist() {
    try {
      setAddToWishlistLoading(true);
      const wishlistRes = await addProductToWishlist(productId);

      if (wishlistRes.status === "success") {
        toast.success(wishlistRes.message, {
          position: "top-right",
        });
        setWishlistItemsCount(wishlistRes.data.length);
        const userWishlistData = await getUserWishlist();
        setIsWished(true);

        if (!userWishlistData) return;

        setWishlistItemsCount(userWishlistData.count);
        setWishlistData(userWishlistData);
      } else {
        if (wishlistRes.message === "Invalid Token. please login again") {
          toast.error("Please Login To Modify Your Wishlist", {
            position: "top-right",
            richColors: true,
          });
        } else {
          toast.error(wishlistRes.message, {
            position: "top-right",
            richColors: true,
          });
        }
      }
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Add to Wishlist failed:", error);
      }

      toast.error("Something went wrong", {
        description: "Please try again later",
        position: "top-center",
        richColors: true,
      });
    } finally {
      setAddToWishlistLoading(false);
    }
  }

  async function handleRemoveFromWishlist() {
    try {
      setAddToWishlistLoading(true);
      const wishlistRes = await removeProductFromWishlist(productId);

      if (wishlistRes.status === "success") {
        toast.success(wishlistRes.message, {
          position: "top-right",
        });
        setWishlistItemsCount(wishlistRes.data.length);
        const userWishlistData = await getUserWishlist();
        setIsWished(false);
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
      setAddToWishlistLoading(false);
    }
  }

  return (
    <>
      <div className="mb-3 flex items-center justify-center gap-3">
        <Button
          disabled={addToCartLoading}
          onClick={handleAddToCart}
          className="bg-crimson hover:bg-crimson-dark crimson-shadow-hover flex h-12.5 flex-1 cursor-pointer items-center rounded-[14px] text-sm font-bold text-white transition hover:-translate-y-1"
        >
          <span>
            {addToCartLoading ? (
              <Loader className="animate-spin" />
            ) : (
              <ShoppingBag />
            )}
          </span>
          {addToCartLoading ? (
            <span>Adding to Cart...</span>
          ) : (
            <span>Add to Cart</span>
          )}
        </Button>
        <Button
          onClick={handleBuyNow}
          disabled={addToCartLoading}
          className="flex h-12.5 flex-1 cursor-pointer items-center rounded-[14px] bg-black/80 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black hover:shadow-2xl"
        >
          <span>
            {addToCartLoading ? <Loader className="animate-spin" /> : <Zap />}
          </span>
          <span>
            {addToCartLoading ? (
              <span>Processing...</span>
            ) : (
              <span>Buy Now</span>
            )}
          </span>
        </Button>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button
          disabled={addToWishlistLoading}
          onClick={isWished ? handleRemoveFromWishlist : handleAddToWishlist}
          className="hover:bg-crimson-soft hover:text-crimson hover:border-crimson flex h-10 flex-1 cursor-pointer items-center rounded-xl border border-gray-300 bg-white text-sm font-bold text-gray-500 transition"
        >
          <span>
            {addToWishlistLoading ? (
              <Loader className="animate-spin" />
            ) : (
              <Heart fill={isWished ? "currentColor" : "none"} />
            )}
          </span>
          {addToWishlistLoading ? (
            <span>Adding to Wishlist...</span>
          ) : isWished ? (
            <span>Added to Wishlist!</span>
          ) : (
            <span>Add to Wishlist</span>
          )}
        </Button>
        <Button className="hover:bg-crimson-soft hover:text-crimson hover:border-crimson flex h-10 flex-1 cursor-pointer items-center rounded-xl border border-gray-300 bg-white text-sm font-bold text-gray-500 transition">
          <span>
            <Share2 />
          </span>
          <span className="">Share</span>
        </Button>
      </div>
    </>
  );
}
