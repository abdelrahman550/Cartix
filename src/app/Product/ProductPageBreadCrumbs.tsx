import { BreadCrumbsInfoType } from "@/types/BreadCrumbsInfoType";
import { ChevronRight, House } from "lucide-react";
import Link from "next/link";
type props = {
  crumbDetails: BreadCrumbsInfoType;
};

export default function ProductPageBreadCrumbs({ crumbDetails }: props) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 px-6 py-3.5 text-sm font-semibold text-gray-500 md:px-14">
      <Link
        href={"/"}
        className="hover:text-crimson flex items-center gap-1 transition"
      >
        <span>
          <House size={14} strokeWidth={3} />
        </span>
        <span>Home</span>
      </Link>
      <span>
        <ChevronRight size={14} strokeWidth={3} />
      </span>
      <Link href={"/"} className="hover:text-crimson transition">
        {crumbDetails.categoryName}
      </Link>
      <span>
        <ChevronRight size={14} strokeWidth={3} />
      </span>
      <Link href={"/"} className="hover:text-crimson transition">
        {crumbDetails.subCategoryName}
      </Link>
      <span>
        <ChevronRight size={14} strokeWidth={3} />
      </span>
      <span className="text-crimson bg-crimson-mid/75 border-crimson max-w-80 truncate rounded-full border px-3 py-1 transition">
        {crumbDetails.productTitle}
      </span>
    </div>
  );
}
