"use client";
import { fraunces } from "@/Fonts";
import { useContext } from "react";
import { wishlistContext } from "../_context/wishlistContextProvider";
import EmptyWishListState from "./EmptyWishListState";
import LoadingWishlistState from "./LoadingWishlistState";
import WishlistPageBreadCrumbs from "./WishlistPageBreadCrumbs";
import WishlistProduct from "./WishlistProduct";

export default function Page() {
  const { wishlistData, isLoading } = useContext(wishlistContext);

  const wishlistItems = wishlistData?.data ?? [];
  const wishlistItemsCount = wishlistData?.count ?? 0;

  return (
    <>
      <WishlistPageBreadCrumbs />
      <div className="bg-gray-100 px-6 pb-6 md:px-14 md:pb-14">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="relative ps-10">
              <p className="text-crimson text-xs font-bold uppercase">
                Saved Items
              </p>
              <div className="bg-crimson via-crimson to-crimson absolute top-1/2 left-0 h-1 w-8 -translate-y-1/2 rounded-xl bg-linear-to-r from-white"></div>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-extrabold">
                My{" "}
                <span className={fraunces.className + " text-crimson"}>
                  Wishlist
                </span>
              </h2>
              <div
                className={`${fraunces.className} rounded-full border border-gray-300 bg-gray-200 px-3 py-1 text-sm font-bold tracking-tight text-gray-500`}
              >
                {wishlistItemsCount} Items Saved
              </div>
            </div>
          </div>
        </div>

        {isLoading && <LoadingWishlistState />}

        {!isLoading && wishlistItemsCount > 0 && (
          <div className="flex flex-col gap-6">
            {wishlistItems.map((item) => (
              <WishlistProduct itemData={item} key={item.id} />
            ))}
          </div>
        )}

        {!isLoading && wishlistItemsCount < 1 && <EmptyWishListState />}
      </div>
    </>
  );
}
