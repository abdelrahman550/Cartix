"use client";
import {
  Heart,
  LinkIcon,
  LogOutIcon,
  Menu,
  Package,
  UserIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function NavDropDown() {
  const session = useSession();
  const authData = session.data;

  function handleLogout() {
    signOut({
      redirect: true,
      callbackUrl: "/Login",
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="Nav-icon-btn group bg-crimson flex text-white md:hidden"
        >
          <Menu className="h-5! w-5!" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        {authData && (
          <>
            <DropdownMenuItem>
              <UserIcon />
              Profile
            </DropdownMenuItem>

            <Link href={"/allorders"}>
              <DropdownMenuItem>
                <Package />
                My Orders
              </DropdownMenuItem>
            </Link>
            <Link href={"/Wishlist"}>
              <DropdownMenuItem>
                <Heart />
                My Wishlist
              </DropdownMenuItem>
            </Link>
          </>
        )}
        <Link href={"/"}>
          <DropdownMenuItem>
            <Package />
            Home
          </DropdownMenuItem>
        </Link>
        <Link href={"/Categories"}>
          <DropdownMenuItem>
            <LinkIcon />
            Categories
          </DropdownMenuItem>
        </Link>
        <Link href={"/Brands"}>
          <DropdownMenuItem>
            <LinkIcon />
            Brands
          </DropdownMenuItem>
        </Link>
        <Link href={"/Shop"}>
          <DropdownMenuItem>
            <LinkIcon />
            Shop
          </DropdownMenuItem>
        </Link>
        {authData && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} variant="destructive">
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
