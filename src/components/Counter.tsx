import React from "react";

interface Props {
  counterQuantity: number;
  setCounterQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({ counterQuantity, setCounterQuantity }: Props) => {
  return (
    <div className="text-white text-xl flex items-center justify-center">
      <button
        className="bg-red-700 w-6 h-6 rounded-r-md flex justify-center items-center"
        onClick={() => {
          setCounterQuantity(counterQuantity + 1);
        }}
      >
        +
      </button>
      <span className="bg-sky-50 text-black w-7 h-6 text-center text-base flex items-center justify-center">
        {counterQuantity}
      </span>
      <button
        className="bg-red-700 w-6 h-6 rounded-l-md flex justify-center items-center"
        onClick={() => {
          counterQuantity > 0 && setCounterQuantity(counterQuantity - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
