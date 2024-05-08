import Boton from "@/components/UI/Boton";
import { TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useCartContext } from "@/context/CartContext";
import { useState } from "react";
import CounterMini from "../UI/CounterMini";

const CartItem = ({ item }) => {
  const { removeFromCart, updateCartItem } = useCartContext();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleRemoveFromCart = () => {
    removeFromCart(item.slug);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    updateCartItem(item.slug, newQuantity - item.quantity);
  };

  return (
    <li className="shadow flex justify-between items-center max-w-xl gap-2 p-1 my-1">
      <Image
        src={`${item.image}`}
        alt={item.title}
        className="h-18 w-14 object-cover rounded-md"
        width={40}
        height={40}
      />

      <div className="text-sm">
        <p className="font-semibold">{item.title}</p>
        {Number(item.price * quantity).toLocaleString("es-AR", {
          style: "currency",
          currency: "ARS",
        })}
        <CounterMini
          max={item.stock}
          counter={quantity}
          setCounter={handleQuantityChange}
        />
      </div>

      <Boton
        className="bg-red-600 hover:bg-red-800"
        onClick={handleRemoveFromCart}
      >
        <TrashIcon className="h-6 w-6 text-white-500" />
      </Boton>
    </li>
  );
};

export default CartItem;
