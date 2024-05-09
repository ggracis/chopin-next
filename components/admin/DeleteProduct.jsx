"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteProduct = ({ slug }) => {
  const [item, setItem] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(
          `${process.env.API_URL}/api/product/${slug}`,
          {
            cache: "no-store",
          }
        );
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };
    fetchItem();
  }, [slug]);

  const handleDelete = async () => {
    try {
      await fetch(`${process.env.API_URL}/api/product/${slug}`, {
        method: "DELETE",
      });
      console.log("Producto eliminado correctamente");
      toast.success("Producto eliminado exitosamente!", {
        position: "bottom-center",
        draggable: true,
      });
      setTimeout(() => {
        window.location.href = "/admin";
      }, 1500);
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      toast.error("Error al eliminar el producto", {
        position: "bottom-center",
        draggable: true,
      });
    }
  };

  const confirmDelete = () => {
    const confirmed = window.confirm(
      "¿Está seguro, seguro, seguro, que desea eliminar este producto?"
    );
    if (confirmed) {
      setIsConfirmed(true);
      handleDelete();
    }
  };

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <article className="bg-white shadow-md rounded-md overflow-hidden flex flex-col md:flex-row mx-auto">
      <ToastContainer />

      <div className="relative md:w-1/2">
        <div className="w-full h-full max-w-sm mx-auto">
          <Image
            src={item.image}
            alt={item.title}
            layout="responsive"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>
      </div>
      <div className="p-4 md:w-1/2 flex flex-col justify-center">
        <h2 className="my-2 text-red-800 font-bold text-xl">
          ¿Está seguro que desea eliminar este producto?
        </h2>
        <h3 className="text-gray-900 font-semibold text-lg m-0">
          {item.title}
        </h3>

        <p className="text-gray-500 mt-1">{item.description}</p>
        <p className="text-blue-500 text-3xl font-heading font-medium">
          {Number(item.price).toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </p>
        {isConfirmed ? (
          <p className="text-gray-500 mt-1 font-bold">Producto eliminado</p>
        ) : (
          <button
            onClick={confirmDelete}
            className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Si, eliminar producto
          </button>
        )}
      </div>
    </article>
  );
};

export default DeleteProduct;
