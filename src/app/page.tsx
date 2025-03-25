'use client'
import { CldImage } from "next-cloudinary"

export default function Home() {
const data = [
  {
    "id": 1,
    "foodName": "Margherita Pizza",
    "price": 12.99,
    "ingredients": "Tomato, Mozzarella, Basil",
    "category": "60c72b2f4f1a2c001c8f4f01"
  },
  {
    "id": 2,
    "foodName": "BBQ Chicken Pizza",
    "price": 14.99,
    "ingredients": "Chicken, BBQ Sauce, Onion, Cheese",
    "category": "60c72b2f4f1a2c001c8f4f02"
  },
  {
    "id": 3,
    "foodName": "Caesar Salad",
    "price": 9.99,
    "ingredients": "Lettuce, Croutons, Parmesan, Caesar Dressing",
    "category": "60c72b2f4f1a2c001c8f4f03"
  },
  {
    "id": 4,
    "foodName": "Spaghetti Carbonara",
    "price": 13.99,
    "ingredients": "Spaghetti, Egg, Pancetta, Parmesan, Black Pepper",
    "category": "60c72b2f4f1a2c001c8f4f04"
  },
  {
    "id": 5,
    "foodName": "Cheeseburger",
    "price": 10.99,
    "ingredients": "Beef Patty, Cheese, Lettuce, Tomato, Bun",
    "category": "60c72b2f4f1a2c001c8f4f05"
  },
  {
    "id": 6,
    "foodName": "Grilled Salmon",
    "price": 16.99,
    "ingredients": "Salmon, Lemon, Garlic Butter, Herbs",
    "category": "60c72b2f4f1a2c001c8f4f06"
  },
  {
    "id": 7,
    "foodName": "Tuna Sandwich",
    "price": 8.99,
    "ingredients": "Tuna, Mayo, Lettuce, Tomato, Whole Grain Bread",
    "category": "60c72b2f4f1a2c001c8f4f07"
  },
  {
    "id": 8,
    "foodName": "Vegetable Stir Fry",
    "price": 11.99,
    "ingredients": "Broccoli, Carrot, Bell Pepper, Soy Sauce, Tofu",
    "category": "60c72b2f4f1a2c001c8f4f08"
  },
  {
    "id": 9,
    "foodName": "Chicken Biryani",
    "price": 13.99,
    "ingredients": "Rice, Chicken, Spices, Onion, Yogurt",
    "category": "60c72b2f4f1a2c001c8f4f09"
  },
  {
    "id": 10,
    "foodName": "Miso Soup",
    "price": 5.99,
    "ingredients": "Miso Paste, Tofu, Seaweed, Green Onion",
    "category": "60c72b2f4f1a2c001c8f4f10"
  }
]

  return (
    <div className="flex justify-center items-center h-screen bg-slate-700">
      <div className="w-[1264px] grid grid-cols-3 gap-4 bg-slate-700">

        {
          data.slice(0,6).map((item) => (
            <div key={item.id}
              className="bg-white p-4 rounded-2xl shadow-md"
            >
              <CldImage
                src="https://res.cloudinary.com/dl3wkodkk/image/upload/v1742906694/Food-Delivery%20Assets/c041fc57196ebf52f07e524b5e4cc98c_zr8tmm.png"
                alt="food"
                width={365}
                height={210}
                className="object-cover w-[365px] h-[210px] rounded-2xl"
              />
              <h2>{item.foodName}</h2>
              <p>{item.ingredients}</p>
              <p>${item.price}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
