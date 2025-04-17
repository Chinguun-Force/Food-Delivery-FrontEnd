import { CategoriesList } from "../_components/CategoriesList";
import FoodList from "../_components/FoodList";

export default function Home() {
  return (
    <div className="mx-10 mt-10">
      <CategoriesList />
      <h1 className="text-2xl font-bold">Food List</h1>
      <FoodList />
    </div>
  );
}