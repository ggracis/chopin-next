import { Inter } from "next/font/google";
import "./styles/globals.css";
import NavBar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import { CartProvider } from "@/context/CartContext";
import CartWidget from "@/components/UI/CartWidget";
import { AuthProvider } from "@/context/AuthContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "[CHOPIN] - Tu shop online con Next.js",
  description: "e-Shop creado con Next.js",
  openGraph: {
    title: "CHOPIN",
    description: "Tu shop online con Next.js",
    authors: ["Gastón Gracis"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <CartProvider>
            <div className="flex flex-col h-screen justify-between">
              <NavBar />
              {children}
              <CartWidget />
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
