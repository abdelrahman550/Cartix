import { ProductResType } from "@/types/ProductResType";

export async function getProductById(
  id: string,
): Promise<ProductResType | null> {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`,
    );

    if (!res.ok) return null;

    const data = await res.json();
    return data.data ?? null;
  } catch {
    return null;
  }
}
