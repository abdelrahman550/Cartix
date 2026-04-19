"use client";
import { Trash, Trash2Icon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { toast } from "sonner";
import { clearUserCart } from "../_actions/ClearCartAction";
import { cartContext } from "../_context/CartContextProvider";

export function ClearCartModal() {
  const { setCartItemsCount, setCartData } = useContext(cartContext);

  async function handleClearCart() {
    try {
      const cartRes = await clearUserCart();

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
        console.error("Clear Cart failed:", error);
      }

      toast.error("Something went wrong", {
        description: "Please try again later",
        position: "top-center",
        richColors: true,
      });
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button title="Clear Cart" className="view-all-btn group">
          <span className="hidden md:inline">Clear all items</span>
          <span>
            <Trash strokeWidth={3} className="h-3.5! w-3.5!" />
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Clear Your Cart?</AlertDialogTitle>
          <AlertDialogDescription>
            All items will be removed from your cart. This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Keep Shopping</AlertDialogCancel>
          <AlertDialogAction onClick={handleClearCart} variant="destructive">
            Yes, Clear All
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
