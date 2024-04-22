"use client";
import { useState } from "react";
import Counter from "../ui/Counter";
import Boton from "../ui/Boton";
import { useCartContext } from "@/components/context/CartContext";

import Link from "next/link";

const QtySelector = ({ item }) => {
  const { addToCart, isInCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addToCart({
      ...item,
      quantity,
    });
  };

  return (
    <div className="flex flex-col gap-5 mt-6">
      {isInCart(item.slug) ? (
        <Link
          href={"/carrito"}
          className="rounded-lg py-2 px-4 bg-blue-800 text-white text-center"
        >
          Terminar mi compra
        </Link>
      ) : (
        <>
          <Counter
            max={item.stock}
            counter={quantity}
            setCounter={setQuantity}
          />
          <Boton
            className="w-full hover:bg-blue-500 text-center	"
            onClick={handleAdd}
          >
            Agregar al carrito
          </Boton>
        </>
      )}
    </div>
  );
};

export default QtySelector;
