"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { getUserCart } from "../_actions/GetUserCartAction";
import { useSession } from "next-auth/react";
import { CartResType } from "@/types/CartResType";

type CartContextType = {
  cartItemsCount: number;
  setCartItemsCount: React.Dispatch<React.SetStateAction<number>>;
  cartData: CartResType | null;
  setCartData: React.Dispatch<React.SetStateAction<CartResType | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const cartContext = createContext<CartContextType>(
  {} as CartContextType,
);

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { status } = useSession();

  async function getCartData() {
    try {
      setIsLoading(true);

      const userCartData = await getUserCart();

      if (!userCartData) return;

      setCartItemsCount(userCartData.numOfCartItems);
      setCartData(userCartData);
    } finally {
      setIsLoading(false);
      
    }
  }
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartData, setCartData] = useState<CartResType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (status === "authenticated") {
      getCartData();
    }

    if (status === "unauthenticated") {
      setCartItemsCount(0);
      setCartData(null);
      setIsLoading(false);
    }
  }, [status]);

  return (
    <cartContext.Provider
      value={{
        cartItemsCount,
        setCartItemsCount,
        cartData,
        setCartData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
