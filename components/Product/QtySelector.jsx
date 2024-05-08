"use client";
import { useState } from "react";
import Counter from "@/components/UI/Counter";
import Boton from "@/components/UI/Boton";
import { useCartContext } from "@/context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QtySelector = ({ item }) => {
  const { addToCart, isInCart, updateCartItem } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    isInCart(item.slug)
      ? updateCartItem(item.slug, quantity)
      : addToCart({
          ...item,
          quantity,
        });
    toast.success("Producto agregado!", {
      draggable: true,
      position: "bottom-center",
    });
  };

  return (
    <div className="flex flex-col gap-5 mt-6">
      <ToastContainer />

      <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
      <Boton
        className="w-full hover:bg-blue-500 text-center	"
        onClick={handleAdd}
      >
        Agregar al carrito
      </Boton>
    </div>
  );
};

export default QtySelector;
