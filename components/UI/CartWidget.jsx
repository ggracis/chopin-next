"use client";
import Link from "next/link";
import { useCartContext } from "@/components/context/CartContext";
import { TrashIcon } from "@heroicons/react/24/solid";

import Image from "next/image";
import Boton from "./Boton";

const CartWidget = () => {
  const { totalQty } = useCartContext();

  return (
    <Link
      href={"/carrito"}
      className={`text-base text-slate-100 p-3 flex items-center`}
    >
      <Boton className="bg-red-600">
        <TrashIcon className="h-6 w-6 text-white-500" />
      </Boton>
      <span>{totalQty()}</span>
    </Link>
  );
};

export default CartWidget;
