"use client";
import CartItem from "@/components/cart/CartItem";
import Checkout from "@/components/cart/Chekout";
import { useCartContext } from "@/context/CartContext";

const Carrito = () => {
  const { cart } = useCartContext();

  return (
    <>
      <main className="mb-auto flex flex-col justify-between p-10">
        <h1 className="text-3xl font-bold">Carrito</h1>
        <hr />
        {cart.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <CartItem item={item} key={item.slug} />
            ))}
          </ul>
        )}
        <hr />
      </main>
      <Checkout />
    </>
  );
};

export default Carrito;
