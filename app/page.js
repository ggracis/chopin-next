import ProductList from "@/components/Product/ProductList";

export default function Home() {
  const categoria = "todos";

  return (
    <>
      <main className="mb-auto flex flex-col items-center justify-between p-10">
        <ProductList categoria={categoria} />
      </main>
    </>
  );
}
