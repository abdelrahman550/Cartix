import { BrandResType } from "./BrandResType";
import { CategoryResType } from "./CategoryResType";
import { SubCategoryResType } from "./SubCategoryResType";

export interface ProductResType {
  id: string,
  title: string,
  imageCover: string,
  description?: string,
  price: number,
  images: string[],
  sold: number,
  ratingsQuantity: number,
  slug: string,
  quantity: number,
  ratingsAverage: number,
  priceAfterDiscount?: number,
  subcategory : SubCategoryResType[]

  category: CategoryResType,
  brand: BrandResType
}
