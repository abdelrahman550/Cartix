"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { fraunces } from "@/Fonts";
import { Headset, Heart, ShoppingCart } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useContext } from "react";
import { cartContext } from "../_context/CartContextProvider";
import { ProfileDropDown } from "./ProfileDropDown";
import { SearchInput } from "./SearchInput";
import { wishlistContext } from "../_context/wishlistContextProvider";
import { usePathname } from "next/navigation";
import { NavDropDown } from "./NavDropDown";

export function Navbar() {
  const session = useSession();
  const { cartItemsCount } = useContext(cartContext);
  const { wishlistItemsCount } = useContext(wishlistContext);
  const authData = session.data;

  const path = usePathname();

  const navLinks = [
    {
      label: "Home",
      linkPath: "/",
    },
    {
      label: "Shop",
      linkPath: "/Shop",
    },
    {
      label: "Categories",
      linkPath: "/Categories",
    },
    {
      label: "Brands",
      linkPath: "/Brands",
    },
  ];

  return (
    <NavigationMenu className="sticky top-0 z-50 flex h-16 w-full max-w-none border-b bg-white px-14 shadow-2xs">
      <div className="flex flex-1 items-center gap-6">
        <Link href={"/"}>
          <div
            className={`${fraunces.className} relative h-full text-4xl font-bold tracking-[-2px]`}
          >
            Cart<span className="text-crimson">ix</span>
          </div>
        </Link>
        <div className="basis-md hidden md:block">
          <SearchInput />
        </div>
      </div>

      <NavigationMenuList className="hidden max-w-full gap-1 xl:flex">
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.label}>
            <NavigationMenuLink
              asChild
              className={`${path === link.linkPath ? "active-nav-item" : "Nav-item"}`}
            >
              <Link href={link.linkPath}>{link.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <div className="ml-4 flex items-center gap-2">
        <div className="me-2 items-center hidden lg:flex justify-center gap-2.5 border-e border-gray-300 px-3">
          <div className="bg-crimson-mid flex h-10 w-10 items-center justify-center rounded-full">
            <Headset className="text-crimson" size={20} />
          </div>
          <div className="flex flex-col text-xs">
            <span className="font-medium text-gray-500">Support</span>
            <span className="text-crimson font-bold">24/7</span>
          </div>
        </div>

        <Link href={"/Wishlist"}>
          <Button variant={"outline"} className="Nav-icon-btn group relative">
            <Heart />
            <span className="icon-tooltip">Wishlist</span>
            {wishlistItemsCount > 0 && (
              <div className="bg-crimson absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[11px] leading-0.5 font-medium tracking-tight text-white">
                <span>{wishlistItemsCount}</span>
              </div>
            )}
          </Button>
        </Link>
        <Link href={"/Cart"}>
          <Button variant={"outline"} className="Nav-icon-btn group relative">
            <ShoppingCart />
            <span className="icon-tooltip">Cart</span>
            {cartItemsCount > 0 && (
              <div className="bg-crimson absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[11px] leading-0.5 font-medium tracking-tight text-white">
                <span>{cartItemsCount}</span>
              </div>
            )}
          </Button>
        </Link>

        {!authData && (
          <Link href={"/Login"}>
            <Button className="signin-btn crimson-shadow-hover">Sign In</Button>
          </Link>
        )}

        {authData && <ProfileDropDown />}
        <NavDropDown />
      </div>
    </NavigationMenu>
  );
}
