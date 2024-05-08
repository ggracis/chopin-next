"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function GlobalError({ error, reset }) {
  const router = useRouter();
  return (
    <main className="mb-auto flex flex-col justify-between p-10">
      <h1>404!</h1>
      <h2>Pagina no encontrada</h2>
      <Link href="/" className="text-blue-500 underline">
        Ir al inicio
      </Link>
      <button onClick={reset}>Reset</button>
    </main>
  );
}
