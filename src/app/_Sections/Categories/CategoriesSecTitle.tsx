import { Button } from "@/components/ui/button";
import { fraunces } from "@/Fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CategoriesSecTitle() {
  return (
    <div className="my-8 flex items-center justify-between">
      <div>
        <div className="relative ps-10">
          <p className="text-crimson text-xs font-bold uppercase">explore</p>
          <div className="bg-crimson via-crimson to-crimson absolute top-1/2 left-0 h-1 w-8 -translate-y-1/2 rounded-xl bg-linear-to-r from-white"></div>
        </div>
        <h2 className="text-3xl font-extrabold">
          Shop By{" "}
          <span className={fraunces.className + " text-crimson"}>Category</span>
        </h2>
      </div>
      <div>
        <Link href={"/Categories"}>
          <Button className="view-all-btn group">
            <span>View All Categories</span>
            <span>
              <ArrowRight
                strokeWidth={3}
                className="group-hover:translate-x-0.5"
              />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
