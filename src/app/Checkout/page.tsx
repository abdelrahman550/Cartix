"use client";
import { fraunces } from "@/Fonts";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ShippingAddressType } from "@/types/CheckoutAddress";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  Banknote,
  Check,
  CircleAlert,
  ClipboardCheck,
  CreditCard,
  Loader,
  MapPin,
  Package2,
  Shield,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import CheckoutPageBreadCrumbs from "./CheckoutPageBreadCrumbs";
import CheckoutProduct from "./CheckoutProduct";
import { CheckoutDataValues, CheckoutShema } from "./CheckoutShema";
import { cartContext } from "../_context/CartContextProvider";
import { useContext, useState } from "react";
import {
  createCashOrder,
  createVisaOrder,
} from "../_actions/OrderCheckoutAction";
import { toast } from "sonner";
import EmptyCheckoutState from "./EmptyCheckoutState";
import LoadingCheckoutState from "./LoadingCheckoutState";

export default function Page() {
  const { cartData, setCartData, setCartItemsCount, isLoading } =
    useContext(cartContext);

  const [paymentMethod, setpaymentMethod] = useState("COD");

  const cartItems = cartData?.data.products ?? [];

  const cartFinalPrice = cartData?.data.totalCartPrice ?? 0;

  const cartTotalItems = cartData?.numOfCartItems ?? 0;
  

  function makePaymentMethodCash() {
    if (paymentMethod === "CARD") {
      setpaymentMethod("COD");
    }
  }
  function makePaymentMethodCard() {
    if (paymentMethod === "COD") {
      setpaymentMethod("CARD");
    }
  }

  const form = useForm({
    defaultValues: {
      details: "",
      city: "",
      phone: "",
      postalCode: "",
    },
    resolver: zodResolver(CheckoutShema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function handleCheckout(values: CheckoutDataValues) {

    const checkoutData: ShippingAddressType = {
      shippingAddress: {
        city: values.city,
        phone: values.phone,
        details: values.details,
        postalCode: values.postalCode,
      },
    };

    try {
      if (!cartData?.cartId) {
        toast.error("Cart is not ready yet");
        return;
      }

      let checkoutResFromAction;

      if (paymentMethod === "COD") {
        checkoutResFromAction = await createCashOrder(
          cartData.cartId,
          checkoutData,
        );
      }

      if (paymentMethod === "CARD") {
        checkoutResFromAction = await createVisaOrder(
          cartData.cartId,
          checkoutData,
        );

        if (checkoutResFromAction.status == "success") {
          window.open(checkoutResFromAction.session.url);
        } else {
          toast.error("Transaction Failed", {
            position: "top-right",
            richColors: true,
          });
          return;
        }
      }

      if (checkoutResFromAction.status != "success") {
        throw new Error(
          checkoutResFromAction.message || "Something went wrong",
        );
      }

      toast.success("Order Created Successfully!", {
        position: "top-right",
      });
      setCartData(null);
      setCartItemsCount(0);
    } catch (error) {

      const message =
        error instanceof Error ? error.message : "Something went wrong";

      toast.error(message, {
        position: "top-right",
        richColors: true,
      });
    }
  }

  return (
    <>
      <CheckoutPageBreadCrumbs />
      <div className="bg-gray-100 px-6 pb-6 md:px-14 md:pb-14">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="relative ps-10">
              <p className="text-crimson text-xs font-bold uppercase">
                Almost There
              </p>
              <div className="bg-crimson via-crimson to-crimson absolute top-1/2 left-0 h-1 w-8 -translate-y-1/2 rounded-xl bg-linear-to-r from-white"></div>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-extrabold">
                Complete Your{" "}
                <span className={fraunces.className + " text-crimson"}>
                  Order
                </span>
              </h2>
            </div>
          </div>
          <div>
            <Link href={"/Cart"}>
              <Button className="view-all-btn group">
                <span className="transition group-hover:-translate-x-0.5">
                  <ArrowLeft strokeWidth={3} className="h-3.5! w-3.5!" />
                </span>
                <span>Back To Cart</span>
              </Button>
            </Link>
          </div>
        </div>

        {isLoading && <LoadingCheckoutState/>}

       {!isLoading && cartTotalItems > 0 && <div className="relative flex flex-col justify-between gap-6 lg:flex-row">
          <div className="flex flex-col gap-5 lg:basis-250">
            <div className="flex h-fit w-full flex-col gap-4">
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl backdrop-blur-md">
                <div className="bg-black px-6 py-4.5">
                  <div className="flex items-center gap-3">
                    <span className="bg-crimson flex h-10 w-10 items-center justify-center rounded-lg text-white">
                      <MapPin size={18} />
                    </span>
                    <div className="flex flex-col justify-between">
                      <h4 className="font-extrabold tracking-tight text-white">
                        Shipping Address
                      </h4>
                      <span className="text-xs font-medium text-gray-300">
                        Where should we deliver your order?
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pt-6">
                  <div className="bg-crimson-soft border-crimson text-crimson flex items-center gap-2 rounded-xl border px-4 py-3 text-xs">
                    <span>
                      <CircleAlert size={18} />
                    </span>
                    <span>
                      Please ensure your address is accurate for smooth delivery
                      across all Egyptian governorates.
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <form
                    id="checkout-form"
                    className="flex flex-col gap-3"
                    onSubmit={form.handleSubmit(handleCheckout)}
                  >
                    <Controller
                      name="city"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            className="text-sm font-semibold text-gray-500"
                            htmlFor={field.name}
                          >
                            City
                          </FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="e.g. Cairo, Alexandria, Giza"
                            autoComplete="off"
                            className="focus:border-crimson focus-visible:ring-crimson/20 focus-visible:border-crimson h-10 bg-gray-100 px-4 py-3 placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus-visible:bg-white focus-visible:ring-2"
                            type="text"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      name="details"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            className="text-sm font-semibold text-gray-500"
                            htmlFor={field.name}
                          >
                            Address Details
                          </FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="Street name, building number, floor, apartment..."
                            autoComplete="off"
                            className="focus:border-crimson focus-visible:ring-crimson/20 focus-visible:border-crimson h-20 bg-gray-100 px-4 py-3 placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus-visible:bg-white focus-visible:ring-2"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      name="postalCode"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            className="text-sm font-semibold text-gray-500"
                            htmlFor={field.name}
                          >
                            Postal Code
                          </FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="Enter Your City's Postal Code"
                            autoComplete="off"
                            type="text"
                            className="focus:border-crimson focus-visible:ring-crimson/20 focus-visible:border-crimson h-10 bg-gray-100 px-4 py-3 placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus-visible:bg-white focus-visible:ring-2"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      name="phone"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel
                            className="text-sm font-semibold text-gray-500"
                            htmlFor={field.name}
                          >
                            Phone Number
                          </FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="01xxxxxxxxx"
                            autoComplete="off"
                            className="focus:border-crimson focus-visible:ring-crimson/20 focus-visible:border-crimson h-10 bg-gray-100 px-4 py-3 placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus-visible:bg-white focus-visible:ring-2"
                            type="tel"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </form>
                </div>
              </div>
            </div>

            <div className="flex h-fit w-full flex-col gap-4">
              <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl backdrop-blur-md">
                <div className="bg-black px-6 py-4.5">
                  <div className="flex items-center gap-3">
                    <span className="bg-crimson flex h-10 w-10 items-center justify-center rounded-lg text-white">
                      <CreditCard size={18} />
                    </span>
                    <div className="flex flex-col justify-between">
                      <h4 className="font-extrabold tracking-tight text-white">
                        Payment Method
                      </h4>
                      <span className="text-xs font-medium text-gray-300">
                        Choose how you&apos;d like to pay
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 p-6">
                  <button
                    onClick={makePaymentMethodCash}
                    className={`flex items-center justify-between rounded-lg border ${paymentMethod === "COD" ? "border-crimson bg-crimson-mid text-crimson" : "hover:text-crimson border-gray-200"} hover:bg-crimson-mid/50 hover:border-crimson group cursor-pointer p-4.5 transition`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-lg border ${paymentMethod === "COD" ? "bg-crimson border-crimson text-white" : "border-gray-300 text-gray-500"} `}
                      >
                        <Banknote size={24} />
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <span className="text-sm font-bold">
                          Cash on Delivery
                        </span>
                        <span className="text-xs text-gray-400">
                          Pay when your order arrives at your doorstep
                        </span>
                      </div>
                    </div>
                    {paymentMethod === "COD" ? (
                      <div className="border-crimson bg-crimson flex h-7 w-7 items-center justify-center rounded-full border-2 text-white">
                        <Check size={18} />
                      </div>
                    ) : (
                      <div className="group-hover:border-crimson h-7 w-7 rounded-full border-2 border-gray-300 transition"></div>
                    )}
                  </button>
                  <button
                    onClick={makePaymentMethodCard}
                    className={`flex items-center justify-between rounded-lg border ${paymentMethod === "CARD" ? "border-crimson bg-crimson-mid text-crimson" : "hover:text-crimson border-gray-200"} hover:bg-crimson-mid/50 hover:border-crimson group cursor-pointer p-4.5 transition`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-lg border ${paymentMethod === "CARD" ? "bg-crimson border-crimson text-white" : "border-gray-300 text-gray-500"} `}
                      >
                        <CreditCard size={24} />
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <span className="text-sm font-bold">Pay Online</span>
                        <span className="text-xs text-gray-400">
                          Secure payment with Credit/Debit Card via Stripe
                        </span>
                      </div>
                    </div>
                    {paymentMethod === "CARD" ? (
                      <div className="border-crimson bg-crimson flex h-7 w-7 items-center justify-center rounded-full border-2 text-white">
                        <Check size={18} />
                      </div>
                    ) : (
                      <div className="group-hover:border-crimson h-7 w-7 rounded-full border-2 border-gray-300 transition"></div>
                    )}
                  </button>
                </div>
              </div>
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

            <div className="flex max-h-55 flex-col gap-3 overflow-y-auto px-5 py-4">
              {cartItems?.map((item) => (
                <CheckoutProduct key={item.product.id} itemData={item} />
              ))}
            </div>

            <div className="flex flex-col gap-3 border-y border-gray-100 px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  Subtotal ({cartTotalItems} items)
                </span>
                <span className="text-sm font-bold">{cartFinalPrice} EGP</span>
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
              <Button
                type="submit"
                variant="default"
                form="checkout-form"
                disabled={isSubmitting || isLoading || !cartData?.cartId}
                className="hover:bg-crimson-dark group crimson-shadow-hover bg-crimson mb-2 flex h-14 w-full cursor-pointer items-center justify-center px-7 font-bold hover:-translate-y-0.5"
              >
                {isSubmitting || isLoading || !cartData?.cartId ? (
                  <Loader className="animate-spin" />
                ) : (
                  <span>
                    <Package2
                      size={24}
                      className="transition group-hover:-translate-x-0.5"
                    />
                  </span>
                )}
                <span>
                  {isLoading || !cartData?.cartId
                    ? "Getting Cart Credentials"
                    : "Place Order"}
                </span>
              </Button>

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
}

        {!isLoading && cartTotalItems < 1 && <EmptyCheckoutState />}
      </div>
    </>
  );
}
