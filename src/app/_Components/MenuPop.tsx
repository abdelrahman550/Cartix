import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function MenuPop() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="text-sm Nav-item aria-expanded:text-crimson hover:text-crimson font-semibold" variant="ghost">Categories <ChevronDown /></Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0 overflow-hidden gap-0">
      <Link href={"/"}>
        <PopoverHeader className="p-3 px-4 transition hover:bg-crimson-mid hover:text-crimson text-slate-800 text-base">
          <PopoverTitle>
            All Categories
          </PopoverTitle>
        </PopoverHeader>
        </Link>

        <Link href={"/"}>
        <PopoverHeader className="p-3 px-4 transition hover:bg-crimson-mid hover:text-crimson text-slate-800 text-base">
          <PopoverTitle>
            Electronics
          </PopoverTitle>
        </PopoverHeader>
        </Link>

        <Link href={"/"}>
        <PopoverHeader className="p-3 px-4 transition hover:bg-crimson-mid hover:text-crimson text-slate-800 text-base">
          <PopoverTitle>Women&apos;s Fashion</PopoverTitle>
        </PopoverHeader>
        </Link>

        <Link href={"/"}>
        <PopoverHeader className="p-3 px-4 transition hover:bg-crimson-mid hover:text-crimson text-slate-800 text-base">
          <PopoverTitle>Men&apos;s Fashion</PopoverTitle>
        </PopoverHeader>
        </Link>

        <Link href={"/"}>
        <PopoverHeader className="p-3 px-4 transition hover:bg-crimson-mid hover:text-crimson text-slate-800 text-base">
          <PopoverTitle>
            Beauty & Health
          </PopoverTitle>
        </PopoverHeader>
        </Link>
      </PopoverContent>

    </Popover>
  );
}



