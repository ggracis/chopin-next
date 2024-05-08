import Link from "next/link";
import { useCartContext } from "@/context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const CartBtn = () => {
  const { totalQty } = useCartContext();

  return (
    <Link
      href={"/carrito"}
      className={`text-base text-slate-100 p-3 flex items-center`}
    >
      <ShoppingCartIcon className="h-6 w-6 text-white-500" />
      <span>{totalQty()}</span>
    </Link>
  );
};

export default CartBtn;
