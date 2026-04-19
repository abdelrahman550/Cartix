import { Button } from "@/components/ui/button";
import { fraunces } from "@/Fonts";
import { HeartCrack, MoveRight } from "lucide-react";
import Link from "next/link";

export default function EmptyWishListState() {
  return (
    <div className="flex h-125 items-center justify-center rounded-2xl bg-white px-10 py-20">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-crimson-soft border-crimson text-crimson mb-5 flex h-20 w-20 items-center justify-center rounded-full border">
          <HeartCrack size={32} />
        </div>
        <h3 className={`${fraunces.className} mb-4 text-3xl font-bold`}>
          Your Wishlist is empty
        </h3>
        <span className="mb-6 text-sm text-gray-600 text-center">
          You haven&apos;t saved anything yet. Browse thousands of products and tap the heart icon to save your favourites here.
        </span>
        <Link href={"/"}>
          <Button
            variant="default"
            className="hover:bg-crimson-dark group crimson-shadow-hover bg-crimson mb-2 flex h-14 w-full cursor-pointer items-center justify-center px-7 font-bold hover:-translate-y-0.5"
          >
            <span>Continue Shopping</span>
            <span>
              <MoveRight
                size={24}
                strokeWidth={4}
                className="transition group-hover:translate-x-0.5"
              />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
