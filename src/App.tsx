import Checkout from "./components/Checkout";
import MainProduct from "./components/MainProduct";
import React, { useState } from "react";

export default function App() {
  const [billTotalPrice, setBillTotalPrice] = useState(0);
  const setBillTotalPriceHandler = (billTotalPrice: number) => {
    setBillTotalPrice(billTotalPrice);
  };
  return (
    <div className="bg-red-600 sm:h-screen w-full p-4 sm:p-16 sm:pt-40 flex flex-col gap-y-8 lg:flex-row lg:gap-x-8 lg:pt-12">
      <MainProduct setBillTotalPrice={setBillTotalPriceHandler} />
      <Checkout
        totalPrice={billTotalPrice}
        setBillTotalPrice={setBillTotalPriceHandler}
      />
    </div>
  );
}
