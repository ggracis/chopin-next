"use client";
import React, { useState, useEffect } from "react";
import Boton from "../UI/Boton";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "@/data/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const createProduct = async (values, imageUrl, setValues, setImageFile) => {
  try {
    const docRef = doc(db, "products", values.slug);
    if (values.slug) {
      const dataToUpdate = imageUrl ? { ...values, image: imageUrl } : values;
      await setDoc(docRef, dataToUpdate);
      console.log("Producto creado/editado exitosamente");
      toast.success("Producto creado/editado exitosamente!", {
        position: "bottom-center",
        draggable: true,
      });
      setValues({
        title: "",
        description: "",
        category: "",
        slug: "",
        image: "",
        rating: 0,
        price: 0,
        stock: 0,
      });
      setImageFile(null);
    } else {
      await setDoc(docRef, { ...values, image: imageUrl });
      console.log("Producto creado/editado exitosamente");
      toast.success("Producto creado/editado exitosamente!", {
        position: "bottom-center",
        draggable: true,
      });
      setValues({
        title: "",
        description: "",
        category: "",
        slug: "",
        image: "",
        rating: 0,
        price: 0,
        stock: 0,
      });
      setImageFile(null);
    }
  } catch (error) {
    console.error("Error al crear/editar el producto:", error);
    toast.error("Error al crear/editar el producto", {
      position: "bottom-center",
      draggable: true,
    });
  }
};

const CreateForm = ({ slug }) => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    category: "",
    slug: "",
    image: "",
    rating: 0,
    price: 0,
    stock: 0,
  });
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (slug) {
      const fetchProduct = async () => {
        const docRef = doc(db, "products", slug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setValues(docSnap.data());
        } else {
          console.log("No se encontró el producto");
        }
      };

      fetchProduct();
    }
  }, [slug]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (imageFile) {
      const storageRef = ref(storage, `images/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("Cargando...");
        },
        (error) => {
          console.error("Error al subir la imagen:", error);
          setIsLoading(false);
          toast.error("Error al subir la imagen", {
            position: "bottom-center",
            draggable: true,
          });
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await createProduct(values, downloadURL, setValues, setImageFile);
          setIsLoading(false);
        }
      );
    } else {
      await createProduct(values, "", setValues, setImageFile);
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto m-4 p-4 max-w-lg bg-gray-500 text-black rounded-md">
      <form onSubmit={handleSubmit} className="m-y-2 space-y-6">
        <label>
          Nombre
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={(e) => {
              if (!values.slug) {
                const slugValue = e.target.value
                  .split(" ")
                  .slice(0, 4)
                  .join("-")
                  .toLowerCase();
                setValues({ ...values, slug: slugValue });
              }
            }}
            placeholder="Nombre"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
            disabled={isLoading}
            required
          />
        </label>
        <label>
          Slug
          <input
            type="text"
            id="slug"
            name="slug"
            value={values.slug}
            onChange={handleChange}
            placeholder="Slug"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
            disabled={isLoading}
            required
          />
        </label>
        <label>
          Descripción
          <textarea
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            placeholder="Descripción"
            className="w-full border border-gray-300 rounded-md px-3 py-4 mb-3"
            disabled={isLoading}
            required
            rows={4}
          />
        </label>
        <label>
          Categoría
          <select
            id="category"
            name="category"
            value={values.category}
            onChange={handleChange}
            placeholder="Categoría"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3"
            disabled={isLoading}
            required
          >
            <option value="deportes">deportes</option>
            <option value="salud">salud</option>
            <option value="moda">moda</option>
            <option value="herramientas">herramientas</option>
          </select>
        </label>

        <label>
          Imágen
          {values.image ? (
            <>
              <Image
                width={120}
                height={120}
                alt={values.title}
                src={values.image}
              />
              <Boton
                className="my-2"
                onClick={() => setValues({ ...values, image: "" })}
                disabled={isLoading}
              >
                Cambiar Imagen
              </Boton>
            </>
          ) : (
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-md px-1 py-1"
              disabled={isLoading}
              required
            />
          )}
        </label>

        <div className="flex">
          <label className="flex-1 w-30 mx-1">
            Calificación
            <input
              type="number"
              id="rating"
              name="rating"
              value={values.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.5"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              disabled={isLoading}
              required
            />
          </label>

          <label className="flex-1 w-30 mx-1">
            Precio
            <input
              type="number"
              id="price"
              name="price"
              value={values.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              disabled={isLoading}
              required
            />
          </label>

          <label className="flex-1 w-30 mx-1">
            Stock
            <input
              type="number"
              id="stock"
              name="stock"
              value={values.stock}
              onChange={handleChange}
              min="0"
              step="1"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              disabled={isLoading}
              required
            />
          </label>
        </div>
        <Boton type="submit" disabled={isLoading} className="w-full py-5">
          {isLoading
            ? "Cargando..."
            : slug
            ? "Editar producto"
            : "Crear producto"}
        </Boton>
      </form>

      <ToastContainer />
    </div>
  );
};

export default CreateForm;
