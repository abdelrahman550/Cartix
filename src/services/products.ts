import { ProductResType } from "@/types/ProductResType";

export async function getAllProducts() :  Promise< ProductResType[] > {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/products", {
    next: { revalidate: 3600 },
  });
  const finalRes = await res.json();
  return finalRes.data;
}
