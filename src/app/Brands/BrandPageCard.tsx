import { BrandResType } from "@/types/BrandResType";
import Image from "next/image";

type props = {
  brandData: BrandResType;
};

export default function BrandPageCard({ brandData }: props) {
  return (
    <div className="group flex h-fit cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:shadow-xl">
      <div className="relative z-10 h-50 w-full border-b border-gray-100">
        <div className="absolute top-1/2 left-1/2 z-20 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-black/20 opacity-0 transition duration-200 group-hover:scale-105 group-hover:opacity-100"></div>
        <Image
          loading="eager"
          src={brandData.image}
          alt={brandData.name}
          sizes="(max-width: 640px) 100vw,
         (max-width: 768px) 50vw,
         (max-width: 1024px) 33vw,
         (max-width: 1280px) 25vw,
         20vw"
          fill
          className="object-cover transition duration-200 group-hover:scale-105"
        />
      </div>

      <div className="text-black group-hover:text-crimson transition duration-200 flex items-center justify-center p-4.5 pt-4 text-xl font-bold">
        <h4>{brandData.name}</h4>
      </div>
    </div>
  );
}
