import { CategoriesList } from "../_components/CategoriesList";
import FoodList from "../_components/FoodList";

export default function Home() {
  return (
    <div className="mx-auto mt-10 w-[1264px]">
      <CategoriesList />
      <FoodList />
    </div>
  );
}