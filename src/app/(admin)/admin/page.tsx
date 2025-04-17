import SideBar from "../_components/SideBar";
import DishesCategory from "./foodmenu/DishesCategory";

export default function AdminHomePage() {
  return <div>
    <SideBar />
    <div className="ml-[300px] w-[100%] m-auto">
      <DishesCategory />
      
    </div>
  </div>;
}