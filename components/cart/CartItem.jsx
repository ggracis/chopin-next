import Boton from "@/components/UI/Boton";
import { TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useCartContext } from "@/context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCartContext();

  const handleRemoveFromCart = () => {
    removeFromCart(item.slug);
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

      <div>
        <p className="text-sm">
          <h3 className="font-semibold">{item.title}</h3>
          {Number(item.price * item.quantity).toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
          <br />
          <span>Cantidad: {item.quantity}</span>
        </p>
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
