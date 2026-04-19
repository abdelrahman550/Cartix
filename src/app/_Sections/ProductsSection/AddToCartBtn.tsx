"use client";
import { addProductToCart } from "@/app/_actions/AddToCartAction";
import { cartContext } from "@/app/_context/CartContextProvider";
import { Button } from "@/components/ui/button";
import { Loader, Plus } from "lucide-react";
import { useContext, useState } from "react";
import { toast } from "sonner";

type props = {
  productId: string;
};

export default function AddToCartBtn({ productId }: props) {
  const { setCartItemsCount, setCartData } = useContext(cartContext);

  const [loading, setLoading] = useState(false);

  async function handleAddToCart() {
    try {
      setLoading(true);
      const cartRes = await addProductToCart(productId);

      if (cartRes.status === "success") {
        toast.success(cartRes.message, {
          position: "top-right",
        });
        setCartItemsCount(cartRes.numOfCartItems);
        setCartData(cartRes);
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
      setLoading(false);
    }
  }

  return (
    <Button
      disabled={loading}
      onClick={handleAddToCart}
      aria-label="Add To Cart"
      title="Add To Cart"
      size={"icon-lg"}
      className="crimson-shadow-hover bg-crimson hover:bg-crimson-dark cursor-pointer transition hover:scale-110"
    >
      {loading ? <Loader className="animate-spin" /> : <Plus strokeWidth={3} />}
    </Button>
  );
}
