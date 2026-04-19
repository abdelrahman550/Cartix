import dynamic from "next/dynamic";
import CategoriesSecSkeleton from "./_Sections/Categories/CategoriesSecSkeleton";
import HeroSlider from "./_Sections/HeroSection/HeroSlider";
import ProductsSecSkeleton from "./_Sections/ProductsSection/ProductsSecSkeleton";
import SubscribeSec from "./_Sections/SubscribeSection/SubscribeSec";
import OurFeatures from "./_Sections/TrustUsFeats/OurFeatures";
import TodayBestDealsSec from "./_Sections/TodayBestDealsSection.tsx/TodayBestDealsSec";

const ProductsSec = dynamic(
  () => import("./_Sections/ProductsSection/ProductsSec"),
  {
    loading: () => <ProductsSecSkeleton />,
    ssr: true,
  },
);

const CategoriesSec = dynamic(
  () => import("./_Sections/Categories/CategoriesSec"),
  {
    loading: () => <CategoriesSecSkeleton />,
    ssr: true,
  },
);

export default function page() {
  return (
    <>
      <HeroSlider />
      <OurFeatures />
      <CategoriesSec />
      <TodayBestDealsSec />
      <ProductsSec />
      <SubscribeSec />
      
    </>
  );
}
