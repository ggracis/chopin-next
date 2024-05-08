import Link from "next/link";
import { useCartContext } from "@/context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const CartBtn = () => {
  const pathname = usePathname();

  const { totalQty } = useCartContext();

  return (
    <Link
      href={"/carrito"}
      className={`flex items-center gap-2 mx-1 px-3 py-2 rounded-md text-sm font-medium ${
        pathname === "/carrito"
          ? "bg-gray-100 text-blue-700"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }`}
    >
      <ShoppingCartIcon className="h-6 w-6 text-white-500" />
      <span>{totalQty()}</span>
    </Link>
  );
};

export default CartBtn;
