"use client";
import Boton from "./Boton";

const CounterMini = ({ counter, setCounter, max }) => {
  const increase = () => counter < max && setCounter(counter + 1);
  const decrease = () => counter > 1 && setCounter(counter - 1);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue >= 1 && newValue <= max) {
      setCounter(newValue);
    }
  };

  return (
    <div className="counter-mini bg-black rounded flex items-center gap-2 p-2">
      <div className="inline-flex items-center gap-1">
        <button
          type="button"
          onClick={decrease}
          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-500 bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          <svg
            className="flex-shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
          </svg>
        </button>
        <input
          type="number"
          value={counter}
          onChange={handleChange}
          min="1"
          max={max}
          className="p-0 w-12 bg-transparent border-0 text-white text-center focus:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          type="button"
          onClick={increase}
          className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-500 bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          <svg
            className="flex-shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </button>
      </div>
      <span className="text-white">Unidades:</span>
    </div>
  );
};

export default CounterMini;
