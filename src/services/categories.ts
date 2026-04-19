import { CategoryResType } from "@/types/CategoryResType";

export async function getAllCategories(): Promise<CategoryResType[]> {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories", {
    next: { revalidate: 3600 },
  });
  const finalRes = await res.json();
  return finalRes.data;
}
