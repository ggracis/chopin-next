"use client";
import CartItem from "@/components/cart/CartItem";
import { useCartContext } from "@/components/context/CartContext";

const Carrito = () => {
  const { cart } = useCartContext();

  return (
    <>
      <main className="mb-auto flex flex-col justify-between p-10">
        <h1 className="text-3xl font-bold">Carrito</h1>
        <hr />
        <ul>
          {cart.map((item) => (
            <CartItem item={item} key={item.slug} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default Carrito;
