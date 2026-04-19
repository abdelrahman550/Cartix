import { getAllCategories } from "@/services/categories";
import CategoriesSecTitle from "./CategoriesSecTitle";
import CategoryCard from "./CategoryCard";

export default async function CategoriesSec() {
  const categories = await getAllCategories();

  return (
    <>
      <div className="bg-gray-100 px-10 py-10">
        <CategoriesSecTitle />
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category._id} categoryData={category} />
          ))}
        </div>
      </div>
    </>
  );
}
