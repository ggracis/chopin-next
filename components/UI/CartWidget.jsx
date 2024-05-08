"use client";
import { usePathname } from "next/navigation";
import { useCartContext } from "@/context/CartContext";
import CartItem from "../cart/CartItem";
import Boton from "./Boton";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import CartBtn from "./CartBtn";
import { useState } from "react";

const CartWidget = () => {
  const { cart, totalPrice } = useCartContext();
  const [showCartItems, setShowCartItems] = useState(true);
  const pathname = usePathname();

  const toggleCartItems = () => {
    setShowCartItems(!showCartItems);
  };

  if (pathname !== "/carrito") {
    return (
      <>
        {cart.length > 0 && (
          <main className="mb-auto flex flex-col justify-between p-1 fixed bottom-0 right-5 z-10 bg-black/80 rounded-t-xl shadow-[0_4px_10px_#000] backdrop-blur-[5px]">
            <div
              className="flex items-center justify-between"
              id="topCartWidget"
            >
              <div className="mr-4">
                <strong>Total: </strong>
                {Number(totalPrice()).toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <Boton
                    className="bg-gray-600 hover:bg-gray-800"
                    onClick={toggleCartItems}
                  >
                    {showCartItems ? (
                      <ArrowDownIcon className="h-4 w-5 text-white-500" />
                    ) : (
                      <ArrowUpIcon className="h-4 w-5 text-white-500" />
                    )}
                  </Boton>
                </div>
                <div>
                  <CartBtn />
                </div>
              </div>
            </div>

            {showCartItems && (
              <div id="botCartWidget">
                <ul>
                  {cart.map((item) => (
                    <CartItem item={item} key={item.slug} />
                  ))}
                </ul>
              </div>
            )}
          </main>
        )}
      </>
    );
  }

  return null;
};

export default CartWidget;
