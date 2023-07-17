import React, { useState } from "react";
import FoodCart from "./FoodCart";

interface Props {
  setBillTotalPrice: (billTotalPrice: number) => void;
}

function MainProduct({ setBillTotalPrice }: Props) {
  const [foodsTotalPrice, setFoodsTotalPrice] = useState<Object>({});

  const calculateTotalPrice = () => {
    let total = 0;
    for (const key in foodsTotalPrice) {
      total += foodsTotalPrice[key];
    }
    setBillTotalPrice(total);
  };
  calculateTotalPrice();

  const setFoodsTotalPriceHandler = (
    foodTotalPrice: Record<number, number>
  ) => {
    setFoodsTotalPrice({ ...foodsTotalPrice, ...foodTotalPrice });
  };

  const foodInfo = [
    {
      id: 0,
      name: "همبرگر مخصوص",
      price: 10000,
      src: "public/images/hamburger.png",
      counterQuantity: 0,
    },
    {
      id: 1,
      name: "همبرگر معمولی",
      price: 8000,
      src: "public/images/hamburger.png",
      counterQuantity: 0,
    },
    {
      id: 2,
      name: "همبرگر مخصوص با قارچ و پنیر",
      price: 20000,
      src: "public/images/hamburger.png",
      counterQuantity: 0,
    },
    {
      id: 3,
      name: "همبرگر معمولی با قارچ و پنیر",
      price: 10000,
      src: "public/images/hamburger.png",
      counterQuantity: 0,
    },
    {
      id: 4,
      name: "سیب زمینی سرخ کرده",
      price: 10000,
      src: "public/images/french_fries.png",
      counterQuantity: 0,
    },
    {
      id: 5,
      name: "سیب زمینی سرخ کرده ویژه",
      price: 25000,
      src: "public/images/french_fries.png",
      counterQuantity: 0,
    },
    {
      id: 6,
      name: "نوشابه",
      price: 5000,
      src: "public/images/soda.png",
      counterQuantity: 0,
    },
    {
      id: 7,
      name: "نوشابه رژیمی",
      price: 6000,
      src: "public/images/soda.png",
      counterQuantity: 0,
    },
    {
      id: 8,
      name: "سالاد سزار",
      price: 25000,
      src: "public/images/ceasar.png",
      counterQuantity: 0,
    },
    {
      id: 9,
      name: "سالاد فصل",
      price: 8000,
      src: "public/images/salad.png",
      counterQuantity: 0,
    },
  ];
  return (
    <div className="bg-sky-50 shadow-md h-[40rem] w-full rounded-xl lg:w-[70%] max-h-full">
      <header className="text-center text-2xl font-bold p-2 border-b shadow-sm">
        <h1 className="px-2 py-4">رستوران مک دونالد شعبه تهران</h1>
      </header>
      <main className="h-4/5 flex flex-col gap-y-4 overflow-y-scroll px-4 mt-4 md:grid md:grid-cols-2 md:gap-x-2">
        {foodInfo.map((item, index) => (
          <FoodCart
            key={index}
            name={item.name}
            price={item.price}
            image={item.src}
            id={item.id}
            setFoodsTotalPriceHandler={setFoodsTotalPriceHandler}
          />
        ))}
      </main>
    </div>
  );
}

export default MainProduct;
