
import { Badge } from "@/components/ui/badge";
import { BASE_URL } from "@/constants";
import axios from "axios";
import Link from "next/link";
// import { useState } from "react";


type CategoryType = {
  _id: string;
  categoryName: string;
};

const getCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories`);
  const { categories } = await response.json();
  return categories;
};

export const CategoriesList = async () => {
  // console.log(categories)
  // setCategories(categories);
  const response = await axios.get(`${BASE_URL}/categories`);
  const categories = await response.data.categories;
  // console.log(categories)
  return (
    <div className="flex gap-2">
      {categories.map((category: CategoryType) => (
        <Link key={category._id} href={"/" + category.categoryName}>
          <Badge className="rounded-full text-md" variant="outline">
            {category.categoryName}
          </Badge>
        </Link>
      ))}
    </div>
  );
};