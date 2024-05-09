"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("¡Mensaje enviado con éxito!", {
          position: "bottom-center",
          draggable: true,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(
          "Error al enviar el mensaje. Esto es de prueba... por ahora",
          {
            position: "bottom-center",
            draggable: true,
          }
        );
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      toast.error(
        "Error al enviar el mensaje. Esto es de prueba... por ahora",
        {
          position: "bottom-center",
          draggable: true,
        }
      );
    }
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="bg-blue/80 rounded-xl shadow-[0_4px_10px_#111827] backdrop-blur-[5px] p-6">
        <h1 className="text-3xl font-bold">Contacto</h1>
        <hr />
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-2">
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Contacto;
