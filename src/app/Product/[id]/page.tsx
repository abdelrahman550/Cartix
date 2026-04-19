import { fraunces } from "@/Fonts";
import { getProductById } from "@/services/singleProduct";
import { Dot, LayoutGrid, Star } from "lucide-react";
import AllBuyingFeats from "../../_Components/BuyingFeatures/AllBuyingFeats";
import ProductGallery from "../../_Components/ProductGallery";
import DetailsFeatsCard from "../DetailsFeatsCard";
import ProductButtons from "../ProductButtons";
import ProductDetailsCard from "../ProductDetailsCard";
import ProductPageBreadCrumbs from "../ProductPageBreadCrumbs";
import QuantityPrice from "../QuantityPrice";
import ProductsYouMayLike from "../ProductsYouMayLike";
import { getAllProducts } from "@/services/products";
import { toast } from "sonner";

interface ParamsType {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: ParamsType) {
  const { id: productId } = await params;

  const productData = await getProductById(productId);

  if (!productData) {
  toast.error("Failed to load product", {
    description: "Please try again later",
  });
}

  const products = await getAllProducts();

  const productInfo = {
    productTitle: productData?.title ?? "",
    productRating: productData?.ratingsAverage ?? 0,
    productRatingQuantity: productData?.ratingsQuantity,
    productImages: productData?.images ?? [],
    subCategoryName: productData?.subcategory?.[0]?.name ?? "",

    productPrice: productData?.price ?? 0,
    productPriceAfterDisc: productData?.priceAfterDiscount ?? null,

    categoryName: productData?.category?.name ?? "",
    brandName: productData?.brand.name ?? "",
    itemsSold: productData?.sold ?? 0,
    productQuantity: productData?.quantity ?? 0,
    productDesc: productData?.description,

    percentageSaved:
      productData?.price &&
      productData?.priceAfterDiscount &&
      productData.priceAfterDiscount < productData.price
        ? Math.round(
            ((productData.price - productData.priceAfterDiscount) /
              productData.price) *
              100,
          )
        : null,
  };

  const finalPrice =
    productInfo.productPriceAfterDisc ?? productInfo.productPrice;

  const cardInfo = {
    categoryName: productInfo.categoryName,
    subCategoryName: productInfo.subCategoryName,
    brandName: productInfo.brandName,
    itemsSold: productInfo.itemsSold,
  };

  const breadCrumbsInfo = {
    categoryName: productInfo.categoryName,
    subCategoryName: productInfo.subCategoryName,
    productTitle: productInfo.productTitle,
  };

  const ratingStars = Array(5)
    .fill(0)
    .map((_, i) => (
      <Star
        key={i}
        size={12}
        fill={
          i < Math.round(productInfo.productRating) ? "currentColor" : "none"
        }
      />
    ));

  return (
    <>
      <ProductPageBreadCrumbs crumbDetails={breadCrumbsInfo} />

      <div className="bg-gray-100 py-10">
        <div className="mb-5 grid h-full grid-cols-1 gap-6 px-6 md:px-14 lg:grid-cols-10 lg:gap-16">
          <div className="col-span-10 h-110 lg:col-span-5 lg:h-full xl:col-span-4">
            <ProductGallery images={productInfo.productImages} />
          </div>
          <div className="col-span-10 lg:col-span-5 xl:col-span-6">
            <div className="mb-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-gold-soft/50 text-gold border-gold-border rounded-full border px-3 py-1 text-[10px] font-bold uppercase">
                  {productInfo.categoryName}
                </span>
                <span className="rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                  {productInfo.brandName}
                </span>
              </div>
              {productInfo.productQuantity >= 1 ? (
                <div className="bg-green-soft text-green border-green-border flex w-fit items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold">
                  <span className="animate-pulse">
                    <Dot size={10} strokeWidth={12} />
                  </span>
                  <span>{productInfo.productQuantity} In Stock</span>
                </div>
              ) : (
                <div className="bg-crimson-mid/75 text-crimson border-crimson flex w-fit items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold">
                  <span className="animate-pulse">
                    <Dot size={10} strokeWidth={12} />
                  </span>
                  <span>Out OF Stock</span>
                </div>
              )}
            </div>
            <h1 className={fraunces.className + " mb-3.5 text-3xl font-bold"}>
              {productInfo.productTitle}
            </h1>
            <div className="mb-3.5 flex items-center gap-1">
              <div className="flex items-center text-yellow-400">
                {ratingStars}
              </div>
              <div className="ms-1 flex items-center gap-1">
                <span className="text-sm font-bold">
                  {productInfo.productRating}
                </span>
                <Dot className="text-gray-700" size={10} strokeWidth={4} />
                <span className="text-xs text-gray-500">
                  ({productInfo.productRatingQuantity} reviews)
                </span>
              </div>
            </div>
            <div className="mb-5 flex items-center gap-3">
              <span
                className={
                  fraunces.className +
                  " text-4xl font-bold tracking-tight uppercase"
                }
              >
                {finalPrice} EGP
              </span>
              {productInfo.productPriceAfterDisc && (
                <>
                  <span className="translate-y-1 font-medium text-gray-400 line-through">
                    {productInfo.productPrice + " EGP"}
                  </span>
                  <span className="bg-crimson rounded-full px-3 py-1 text-xs font-bold text-white">
                    {"Save " + productInfo.percentageSaved + "%"}
                  </span>
                </>
              )}
            </div>

            <div className="mt-5 border-y border-gray-200 py-5">
              <p className="mb-5 text-sm text-gray-600">
                {productInfo.productDesc}
              </p>
              <QuantityPrice price={finalPrice} />
              <ProductButtons productId={productId} />
              <AllBuyingFeats />
            </div>
          </div>
        </div>
        <div className="mt-14 px-6 md:px-14">
          <div className="mb-7 border-b-2 border-gray-200">
            <div className="text-crimson relative flex w-fit items-center gap-2 py-3.5 pe-5.5 text-sm font-bold">
              <span>
                <LayoutGrid size={16} />
              </span>
              <span>Product Details</span>
              <span className="bg-crimson absolute -bottom-0.5 left-0 h-0.5 w-full"></span>
            </div>
          </div>
          <p className="mb-6 text-gray-500">{productInfo.productDesc}</p>
          <div className="items-top flex flex-col gap-4 md:flex-row">
            <ProductDetailsCard cardDetails={cardInfo} />
            <DetailsFeatsCard />
          </div>
        </div>
        <ProductsYouMayLike
          productId={productId}
          products={products}
          productCategory={productInfo.categoryName}
        />
      </div>
    </>
  );
}
