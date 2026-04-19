"use client";
import { Button } from "@/components/ui/button";
import { fraunces } from "@/Fonts";
import {
  ArrowLeft,
  ClipboardCheck,
  MoveRight,
  Shield,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { cartContext } from "../_context/CartContextProvider";
import CartPageBreadCrumbs from "./CartPageBreadCrumbs";
import CartProduct from "./CartProduct";
import { ClearCartModal } from "./ClearCartModal";
import EmptyCartState from "./EmptyCartState";
import LoadingCartState from "./LoadingCartState";

export default function Page() {
  const { cartData, isLoading } = useContext(cartContext);

  const cartItems = cartData?.data.products ?? [];

  const cartFinalPrice = cartData?.data.totalCartPrice ?? 0;

  const cartTotalItems = cartData?.numOfCartItems ?? 0;

  return (
    <>
      <CartPageBreadCrumbs />
      <div className="bg-gray-100 px-6 pb-6 md:px-14 md:pb-14">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="relative ps-10">
              <p className="text-crimson text-xs font-bold uppercase">
                Your Selection
              </p>
              <div className="bg-crimson via-crimson to-crimson absolute top-1/2 left-0 h-1 w-8 -translate-y-1/2 rounded-xl bg-linear-to-r from-white"></div>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-extrabold">
                Shopping{" "}
                <span className={fraunces.className + " text-crimson"}>
                  Cart
                </span>
              </h2>
              <div
                className={`${fraunces.className} rounded-full border border-gray-300 bg-gray-200 px-3 py-1 text-sm font-bold tracking-tight text-gray-500`}
              >
                {cartTotalItems} Items
              </div>
            </div>
          </div>
          <div>
            <ClearCartModal />
          </div>
        </div>

        {isLoading && <LoadingCartState />}

        {!isLoading && cartTotalItems > 0 && (
          <div className="relative flex flex-col justify-between gap-6 lg:flex-row">
            <div className="flex h-fit flex-col gap-4 lg:basis-250">
              {cartItems?.map((item) => (
                <CartProduct key={item.product.id} itemData={item} />
              ))}

              <div>
                <Link href={"/"}>
                  <div className="hover:text-crimson group flex w-fit cursor-pointer items-center gap-1 text-sm font-semibold text-gray-800 transition">
                    <span className="transition group-hover:-translate-x-1">
                      <ArrowLeft size={16} />
                    </span>
                    <span className="transition">Continue Shopping</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="sticky top-20 h-fit min-w-95 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl backdrop-blur-md">
              <div className="bg-black px-6 py-5.5">
                <div className="flex items-center gap-3">
                  <span className="bg-crimson flex h-9 w-9 items-center justify-center rounded-lg text-white">
                    <ClipboardCheck size={16} />
                  </span>

                  <h3
                    className={`${fraunces.className} text-lg font-bold tracking-tight text-white`}
                  >
                    Order Summary
                  </h3>
                </div>
              </div>

              <div className="px-4 py-3">
                <div className="bg-green-soft border-green-border flex items-center gap-6 rounded-xl border p-3">
                  <span className="bg-green flex h-9 w-9 items-center justify-center rounded-lg text-white">
                    <Truck size={16} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-green text-sm font-bold">
                      Free Shipping!
                    </span>
                    <span className="text-green/80 text-xs font-semibold">
                      You qualify for free delivery
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-y border-gray-100 px-6 py-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    Subtotal ({cartTotalItems} items)
                  </span>
                  <span className="text-sm font-bold">
                    {cartFinalPrice} EGP
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    Shipping
                  </span>
                  <span className="text-crimson text-sm font-bold">FREE!</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                <span className="font-extrabold">Total</span>
                <div className="flex items-end gap-1">
                  <span
                    className={`${fraunces.className} text-crimson text-3xl font-bold tracking-tight`}
                  >
                    {cartFinalPrice}
                  </span>
                  <span className="text-sm font-semibold tracking-tight text-gray-500">
                    EGP
                  </span>
                </div>
              </div>

              <div className="px-6 pt-5 pb-3">
                <Link href={"/Checkout"}>
                <Button
                  variant="default"
                  className="hover:bg-crimson-dark group crimson-shadow-hover bg-crimson mb-2 flex h-14 w-full cursor-pointer items-center justify-center px-7 font-bold hover:-translate-y-0.5"
                >
                  <span>Proceed to Checkout</span>
                  <span>
                    <MoveRight
                      size={24}
                      strokeWidth={4}
                      className="transition group-hover:translate-x-0.5"
                    />
                  </span>
                </Button>
                </Link>

                <div className="flex items-center justify-center py-2">
                  <div className="flex items-center gap-2 border-e-2 border-gray-500 px-4">
                    <span className="text-crimson">
                      <Shield size={14} fill="currentColor" />
                    </span>
                    <span className="text-xs font-medium text-gray-600">
                      Secure Payment
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4">
                    <span className="text-crimson">
                      <Truck size={14} />
                    </span>
                    <span className="text-xs font-medium text-gray-600">
                      Fast Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isLoading && cartTotalItems < 1 && <EmptyCartState />}
      </div>
    </>
  );
}
