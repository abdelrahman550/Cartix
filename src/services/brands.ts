import { BrandResType } from "@/types/BrandResType";

export async function getAllBrands(): Promise<BrandResType[]> {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands", {
    next: { revalidate: 3600 },
  });
  const finalRes = await res.json();
  return finalRes.data;
}
