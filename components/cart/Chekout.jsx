"use client";
import { useState } from "react";
import { useCartContext } from "@/context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/data/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { cart, totalPrice, emptyCart } = useCartContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        ...formData,
        cart,
        totalPrice: totalPrice(),
        timestamp: new Date(),
      };
      const ordersCollection = collection(db, "orders");
      await addDoc(ordersCollection, orderData);
      emptyCart();
      toast.success("😎 Orden enviada exitosamente", {
        position: "bottom-center",
        autoClose: 5000,

        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

        theme: "colored",
      });
    } catch (error) {
      toast.error("Error al enviar la orden", {
        position: "bottom-center",
        autoClose: 3000,

        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log(error.message);
    }
  };

  return (
    <main className="mb-auto flex flex-col justify-between p-10">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <hr />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
          />
        </div>
        <div>
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar orden
        </button>
      </form>
      <ToastContainer />
    </main>
  );
};

export default Checkout;
