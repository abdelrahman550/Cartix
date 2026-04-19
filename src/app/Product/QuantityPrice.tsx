"use client";
import { Button } from "@/components/ui/button";
import { fraunces } from "@/Fonts";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

type props = {
  price : number
}

export default function QuantityPrice({price} : props) {
  const [quantity, setQuantity] = useState(1);

  function handleAddToQuantity() {
    setQuantity(quantity + 1);
  }

  function handleRemoveFromQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="flex items-center justify-between rounded-[18px] border border-gray-300 bg-gray-200/75 px-5 py-4 mb-4.5">
      <div>
        <div className="mb-2.5 w-fit text-[11px] font-bold tracking-wide text-gray-400 uppercase">
          Quantity
        </div>
        <div className="flex h-10 w-32 items-center overflow-hidden rounded-[10px] border border-gray-300 bg-white">
          <Button
            onClick={handleRemoveFromQuantity}
            className="hover:text-crimson hover:bg-crimson-soft h-11 w-11 -translate-x-0.5 cursor-pointer rounded-none border border-gray-300 bg-white text-gray-700 transition"
            size={"icon"}
          >
            <Minus />
          </Button>
          <span className="text-sm flex h-11 w-11 items-center justify-center font-bold">
            {quantity}
          </span>
          <Button
            onClick={handleAddToQuantity}
            className="hover:text-crimson hover:bg-crimson-soft h-11 w-11 translate-x-0.5 cursor-pointer rounded-none border border-gray-300 bg-white text-gray-700 transition"
            size={"icon"}
          >
            <Plus />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="mb-2.5 w-fit text-[11px] font-bold tracking-wide text-gray-400 uppercase">
          Total Price
        </div>
        <span
          className={
            fraunces.className +
            " text-crimson text-3xl font-bold tracking-tighter"
          }
        >
          {price * quantity} EGP
        </span>
      </div>
    </div>
  );
}
