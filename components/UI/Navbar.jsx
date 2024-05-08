"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CartBtn from "./CartBtn";
import {
  UserIcon,
  ArrowRightEndOnRectangleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const { user, logOut } = useAuthContext();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Herramientas", href: "/productos/herramientas" },
    { label: "Deportes y fitness", href: "/productos/deportes" },
    { label: "Moda", href: "/productos/moda" },
    { label: "Salud y belleza", href: "/productos/salud" },
    { label: "Contacto", href: "/contacto" },
    {
      label: "Admin",
      href: "/admin",
      icon: <UserIcon className="h-5 w-5" />,
    },
  ];

  return (
    <header className="w-full bg-gray-800">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/chopin_w.png"
            alt="CHOPIN"
            title="CHOPIN"
            width={120}
            height={40}
          />
        </Link>

        <button
          onClick={toggleMenu}
          className="block md:hidden text-gray-300 hover:text-white focus:text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:block md:flex md:items-center md:w-auto`}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={link.onClick}
              className={`flex items-center gap-2 mx-1 px-3 py-2 rounded-md text-sm font-medium ${
                pathname === link.href
                  ? "bg-gray-100 text-blue-700"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          <CartBtn />

          {user && (
            <Link
              href="/"
              onClick={handleLogout}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
            >
              <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
              Cerrar sesión
            </Link>
          )}
          {user && (
            <Link
              href="/admin/pedidos"
              onClick={handleLogout}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
            >
              <ShoppingBagIcon className="h-5 w-5" />
              Pedidos
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
