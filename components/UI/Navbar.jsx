"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CartWidget from "./CartWidget";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Herramientas", href: "/productos/herramientas" },
  { label: "Deportes y fitness", href: "/productos/deportes" },
  { label: "Moda", href: "/productos/moda" },
  { label: "Salud y belleza", href: "/productos/salud" },
  { label: "Carrito", href: "/carrito" },
  { label: "Admin", href: "/admin" },
  { label: "Contacto", href: "/contacto" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
              className={
                pathname === link.href
                  ? "block md:inline-block mt-4 md:mt-0 md:ml-6 text-white font-medium"
                  : "block md:inline-block mt-4 md:mt-0 md:ml-6 text-gray-300 hover:text-white font-medium"
              }
              key={link.href}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <CartWidget />
        </nav>
      </div>
    </header>
  );
}
