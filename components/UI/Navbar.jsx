"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <header className="w-full bg-gray-800">
      <div className="container m-auto py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/chopin_w.png"
            alt="CHOPIN"
            title="CHOPIN"
            width={120}
            height={40}
          />
        </Link>

        <nav className="flex justify-between gap-4">
          {links.map((link) => (
            <Link
              className={
                pathname === link.href
                  ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  : "text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              }
              key={link.href}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
