"use client";
import Boton from "./Boton";

const Counter = ({ counter, setCounter, max }) => {
  const increase = () => counter < max && setCounter(counter + 1);
  const decrease = () => counter > 1 && setCounter(counter - 1);

  return (
    <div className="flex items-center gap-3">
      <Boton onClick={decrease} className="active:bg-blue-600 text-xl	">
        -
      </Boton>
      <p className="text-black text-lg">{counter}</p>
      <Boton onClick={increase} className="active:bg-blue-600 text-xl	">
        +
      </Boton>
    </div>
  );
};

export default Counter;
