import ProductList from "@/components/Product/ProductList";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `[CHOPIN] - ${params.categoria.toUpperCase()} `,
  };
}

const Categoria = ({ params }) => {
  const { categoria } = params;
  return (
    <main className="mb-auto flex flex-col justify-between p-10">
      <h1>Categoria {categoria}</h1>
      <ProductList categoria={categoria} />
    </main>
  );
};
export default Categoria;
