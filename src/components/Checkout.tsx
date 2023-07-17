import React, { useRef, useState } from "react";

interface Props {
  totalPrice: number;
  setBillTotalPrice: (billTotalPrice: number) => void;
}

const Checkout = ({ totalPrice }: Props) => {
  let [fPrice, setFPrice] = useState(0);
  let [discountNumber, setDiscountNumber] = useState(0);

  const billTotalPrice = totalPrice;
  const wage = billTotalPrice * 0.05;
  let finalPrice = billTotalPrice + wage;

  const discountInputRef = useRef<HTMLInputElement>(null);

  let canUseDiscount = true;
  const applyDiscount = () => {
    const discountInputValue = discountInputRef.current?.value || "";

    if (canUseDiscount) {
      switch (discountInputValue) {
        case "golden":
          finalPrice = finalPrice - (finalPrice / 100) * 30;
          setFPrice(finalPrice);
          canUseDiscount = false;
          setDiscountNumber(30);
          break;
        case "silver":
          finalPrice = finalPrice - (finalPrice / 100) * 20;
          setFPrice(finalPrice);
          canUseDiscount = false;
          setDiscountNumber(20);
          break;
        case "bronze":
          finalPrice = finalPrice - (finalPrice / 100) * 10;
          setFPrice(finalPrice);
          canUseDiscount = false;
          setDiscountNumber(10);
          break;
      }
    }
  };

  return (
    <div className="flex flex-col lg:w-[30%]">
      <div className="rounded-xl bg-sky-50 flex flex-col px-4 py-3 w-full gap-y-12  sm:flex-row sm:justify-center sm:gap-x-8 sm:w-full lg:flex-col">
        <div className="flex flex-col gap-y-3 sm:w-[45%] lg:w-full">
          <div className="flex justify-between">
            <span>جمع کل سفارشات:</span>
            <span>{billTotalPrice} تومان</span>
          </div>
          <div className="flex justify-between">
            <span>حق سرویس و کارمزد:</span>
            <span>{wage} تومان</span>
          </div>
          <div className="flex justify-between">
            <span>تخفیف:</span>
            <span>{discountNumber} درصد</span>
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              id="discountInput"
              className="w-full pr-2 rounded focus:outline-none"
              placeholder="کد تخفیف"
              ref={discountInputRef}
            />
            <button
              className="bg-red-800 w-12 h-8 p-2 cursor-pointer flex justify-center items-center rounded-l"
              onClick={() => applyDiscount()}
            >
              <img src="/svg/tick.svg" alt="tick icon" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 justify-evenly sm:w-[45%] lg:w-full">
          <div className="flex justify-between bg-yellow-400 py-2 px-2 rounded sm:w-full sm:h-full sm:items-center">
            <span>مبلغ قابل پرداخت:</span>
            <span>{fPrice || finalPrice} تومان</span>
          </div>
          <button className="bg-red-800 text-white rounded cursor-pointer py-3 sm:h-full">
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
