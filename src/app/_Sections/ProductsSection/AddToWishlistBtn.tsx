"use client";
import { addProductToWishlist } from "@/app/_actions/addToWishlistAction";
import { getUserWishlist } from "@/app/_actions/GetUserWishlistAction";
import { wishlistContext } from "@/app/_context/wishlistContextProvider";
import { Button } from "@/components/ui/button";
import { Heart, Loader } from "lucide-react";
import React, { useContext, useState } from "react";
import { toast } from "sonner";

export default function AddToWishlistBtn({ productId }: { productId: string }) {
  const { setWishlistItemsCount, setWishlistData } =
    useContext(wishlistContext);
  const [loading, setLoading] = useState(false);

  async function handleAddToWishlist() {
    try {
      setLoading(true);
      const wishlistRes = await addProductToWishlist(productId);

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
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleAddToWishlist}
      aria-label="Add To Wishlist"
      title="Add To Wishlist"
      size="icon"
      className="hover:bg-crimson bg-crimson-soft/50 border-crimson-border hover:border-crimson text-crimson translate-x-12 cursor-pointer border transition delay-0 duration-200 group-hover:translate-x-0 hover:text-white"
      disabled={loading}
    >
      {loading ? <Loader className="animate-spin" /> : <Heart />}
    </Button>
  );
}
