import {
  CircleUserRound,
  Heart,
  LogOutIcon,
  Package,
  UserIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";

export function ProfileDropDown() {
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
          className="Nav-icon-btn group bg-crimson hidden md:flex text-white"
        >
          <CircleUserRound className="w-5! h-5!" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
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
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} variant="destructive">
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
