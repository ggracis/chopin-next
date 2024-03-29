import { Inter } from "next/font/google";
import "./styles/globals.css";
import NavBar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";

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
        <div class="flex flex-col h-screen justify-between">
          <NavBar />

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
