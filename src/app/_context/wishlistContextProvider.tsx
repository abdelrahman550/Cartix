"use client";
import { WishlistResType } from "@/types/WishlistResType";
import { useSession } from "next-auth/react";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { getUserWishlist } from "../_actions/GetUserWishlistAction";

type WishlistContextType = {
  wishlistItemsCount: number;
  setWishlistItemsCount: React.Dispatch<React.SetStateAction<number>>;
  wishlistData: WishlistResType | null;
  setWishlistData: React.Dispatch<React.SetStateAction<WishlistResType | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const wishlistContext = createContext<WishlistContextType>(
  {} as WishlistContextType,
);

export default function WishlistContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { status } = useSession();

  async function getWishlistData() {
    try {
      setIsLoading(true);

      const userWishlistData = await getUserWishlist();

      if (!userWishlistData) return;

      setWishlistItemsCount(userWishlistData.count);
      setWishlistData(userWishlistData);
    } finally {
      setIsLoading(false);
      
    }
  }
  const [wishlistItemsCount, setWishlistItemsCount] = useState(0);
  const [wishlistData, setWishlistData] = useState<WishlistResType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (status === "authenticated") {
      getWishlistData();
    }

    if (status === "unauthenticated") {
      setWishlistItemsCount(0);
      setWishlistData(null);
      setIsLoading(false);
    }
  }, [status]);

  return (
    <wishlistContext.Provider
      value={{
        wishlistItemsCount,
        setWishlistItemsCount,
        wishlistData,
        setWishlistData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
}
