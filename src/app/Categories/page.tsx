import { getAllCategories } from "@/services/categories";
import CategoryPageCard from "./CategoryPageCard";
import CategoriesPageHeader from "./CategoriesPageHeader";

export default async function page() {
  const categories = await getAllCategories();
  return (
    <>
      <CategoriesPageHeader />

      <div className="grid grid-cols-1 gap-4 px-6 py-12 sm:grid-cols-2 md:grid-cols-3 md:px-14 lg:grid-cols-4 xl:grid-cols-5">
        {categories.map((category) => (
          <CategoryPageCard key={category._id} categoryData={category} />
        ))}
      </div>
    </>
  );
}
