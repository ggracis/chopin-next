"use client";
import React, { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import Boton from "../UI/Boton";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  };

  const { logIn } = useAuthContext();
  const router = useRouter();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(values.email, values.password);
      toast.success("Inicio de sesión exitoso", {
        position: "bottom-center",
        closeOnClick: true,
        draggable: true,
      });
      router.push("/admin");
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage, {
        position: "bottom-center",
        closeOnClick: true,
        draggable: true,
      });
      console.log(errorMessage);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="bg-blue/80 rounded-xl shadow-[0_4px_10px_#111827] backdrop-blur-[5px] p-6">
        {isRegister ? (
          <RegisterForm toggleRegister={toggleRegister} />
        ) : (
          <form onSubmit={handleLogin} className="m-y-2 space-y-6">
            <Boton
              className="mb-2 w-full bg-gray-600 text-white hover:bg-gray-700"
              onClick={toggleRegister}
            >
              Registrarse
            </Boton>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              />
            </div>
            <div className="flex justify-between">
              <Boton className="w-full" type="submit">
                Iniciar sesión
              </Boton>
            </div>
          </form>
        )}
      </div>
      <ToastContainer />
    </main>
  );
};

export default LoginForm;

const RegisterForm = ({ toggleRegister }) => {
  const { signUp } = useAuthContext();
  const [registerValues, setRegisterValues] = useState({
    email: "",
    password: "",
  });

  const handleRegisterChange = (e) => {
    setRegisterValues({
      ...registerValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await signUp(registerValues.email, registerValues.password);
      toast.success("Registro exitoso", {
        position: "bottom-center",

        closeOnClick: true,

        draggable: true,
      });
      toast.success("Registro como admin exitoso", {
        position: "bottom-center",
        closeOnClick: true,
        draggable: true,
      });
      console.log("Registro exitoso");
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage, {
        position: "bottom-center",
        closeOnClick: true,
        draggable: true,
      });
      console.log(errorMessage);
    }
  };

  return (
    <form onSubmit={handleRegister} className="m-y-2 space-y-6">
      <Boton
        className="mb-2 w-full bg-gray-600 text-white hover:bg-gray-700"
        onClick={toggleRegister}
      >
        Iniciar sesión
      </Boton>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={registerValues.email}
          onChange={handleRegisterChange}
          required
          className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={registerValues.password}
          onChange={handleRegisterChange}
          required
          minLength={6}
          className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
        />
      </div>
      <div className="flex justify-between">
        <Boton className="w-full" type="submit">
          Registrarse
        </Boton>
      </div>
    </form>
  );
};
