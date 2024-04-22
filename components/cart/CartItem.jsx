import Boton from "@/components/UI/Boton";
import { TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const CartItem = ({ item }) => {
  return (
    <li className="shadow flex justify-between items-center max-w-xl gap-6 p-4 my-4">
      <Image src={`${item.image}`} alt={item.title} width={80} height={80} />
      <div>
        <h3>{item.title}</h3>
        <p className="text-sm font-semibold">${item.price * item.quantity}</p>
        <p className="text-sm">Cantidad: {item.quantity}</p>
      </div>

      <Boton className="bg-red-600">
        <TrashIcon className="h-6 w-6 text-white-500" />
      </Boton>
    </li>
  );
};

export default CartItem;
