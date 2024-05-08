"use client";
import Boton from "./Boton";

const CounterMini = ({ counter, setCounter, max }) => {
  const increase = () => counter < max && setCounter(counter + 1);
  const decrease = () => counter > 1 && setCounter(counter - 1);

  return (
    <div className="flex items-center gap-3">
      <div
        onClick={decrease}
        className="px-2 py-0 rounded  bg-gray-500 hover:bg-gray-600 text-sm cursor-pointer"
      >
        -
      </div>
      <p className="text-white text-sm">{counter}</p>
      <div
        onClick={increase}
        className="px-2 py-0 rounded  bg-gray-500 hover:bg-gray-600 text-sm cursor-pointer"
      >
        +
      </div>
    </div>
  );
};

export default CounterMini;
