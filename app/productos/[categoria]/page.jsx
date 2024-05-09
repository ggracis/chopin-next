import ProductList from "@/components/Product/ProductList";
import { Suspense } from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `[CHOPIN] - ${params.categoria.toUpperCase()} `,
  };
}

export const revalidate = 3600;

export async function generateStaticParams() {
  return [
    { categoria: "todos" },
    { categoria: "herramientas" },
    { categoria: "deportes" },
    { categoria: "moda" },
    { categoria: "salud" },
  ];
}

const Categoria = ({ params }) => {
  const { categoria } = params;
  return (
    <main className="mb-auto flex flex-col justify-between p-10">
      <Suspense fallback={<p>Cargando...</p>}>
        <ProductList categoria={categoria} />
      </Suspense>
    </main>
  );
};
export default Categoria;
