import React, { useState, useEffect } from "react";
import Counter from "./Counter";

interface Props {
  name: string;
  price: number;
  image: string;
  id: number;
  setFoodsTotalPriceHandler: (foodTotalPrice: Record<number, number>) => void;
}

const FoodCart = ({
  name,
  price,
  image,
  id,
  setFoodsTotalPriceHandler,
}: Props) => {
  const [counterQuantity, setCounterQuantity] = useState(0);
  const totalPrice = counterQuantity * price;
  useEffect(() => {
    setFoodsTotalPriceHandler({ [id]: totalPrice });
  }, [counterQuantity]);

  return (
    <div className="flex justify-around bg-white rounded items-center shadow p-1">
      <div>
        <img src={image} alt="hambergur" className="h-24" />
      </div>
      <div className="w-full flex justify-around sm:flex sm:justify-between sm:w-full sm:px-4">
        <div className="w-full flex flex-col items-start gap-y-1">
          <h2>{name}</h2>
          <span>{price} تومان</span>
          <div className="flex justify-between w-full">
            <Counter
              counterQuantity={counterQuantity}
              setCounterQuantity={setCounterQuantity}
            />
            <div className="self-end">
              <span> {totalPrice} تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
