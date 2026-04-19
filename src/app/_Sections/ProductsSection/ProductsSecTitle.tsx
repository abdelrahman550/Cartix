import { fraunces } from "@/Fonts";
import React from "react";

export default function ProductsSecTitle() {
  return (
    <div className="my-8 flex items-center justify-between">
      <div>
        <div className="relative ps-10">
          <p className="text-crimson text-xs font-bold uppercase">Handpicked For You</p>
          <div className="bg-crimson via-crimson to-crimson absolute top-1/2 left-0 h-1 w-8 -translate-y-1/2 rounded-xl bg-linear-to-r from-white"></div>
        </div>
        <h2 className="text-3xl font-extrabold">
          Featured{" "}
          <span className={fraunces.className + " text-crimson"}>Products</span>
        </h2>
      </div>
      <div></div>
    </div>
  );
}
