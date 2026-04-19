import { CategoryResType } from "@/types/CategoryResType";
import Image from "next/image";

type props = {
  categoryData: CategoryResType;
};

export default function CategoryCard({ categoryData }: props) {
  return (
    <div className="group category-card relative shadow-lg backdrop-blur-2xl hover:shadow-xl">
      <p className="group-hover:text-crimson mb-1.5 text-sm font-bold transition">
        {categoryData.name}
      </p>
      <div className="mb-3.5 flex w-full items-center justify-center">
        <div className="group-hover:border-crimson relative h-24 w-24 overflow-hidden rounded-full border-2 shadow-xl border-gray-100 transition duration-300 group-hover:scale-105">
          <Image
            src={categoryData.image}
            alt={categoryData.name}
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
      </div>
      
     
      <span className="bg-crimson absolute top-full right-0 h-1 w-full transition duration-300 group-hover:-translate-y-full"></span>
    </div>
  );
}
