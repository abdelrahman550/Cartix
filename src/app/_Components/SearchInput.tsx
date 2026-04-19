import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <div className="relative h-10 rounded-lg flex w-full">
      <Input
        id="input-button-group"
        placeholder="Search products, brands and more…"
        className="h-10 bg-gray-100 basis-md
          focus:outline-none focus:border-crimson focus-visible:ring-2
            focus-visible:ring-crimson/20
            focus-visible:border-crimson
            focus-visible:bg-white
            pr-12
            pl-4
            placeholder:text-sm
            placeholder:text-gray-400
            "
      />

      <button
        type="button"
        className="bg-crimson rounded-lg rounded-l-none w-11 h-full absolute right-0 flex justify-center items-center top-0 hover:bg-crimson-dark cursor-pointer text-white transition-colors duration-150"
      >
        <Search size={16} strokeWidth={3} />
      </button>
    </div>
  );
}
