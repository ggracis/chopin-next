import ProductDetail from "@/components/Product/ProductDetail";

const Producto = ({ params }) => {
  const { slug } = params;
  return (
    <main className="mb-auto flex flex-col justify-between p-10">
      <ProductDetail slug={slug} />
    </main>
  );
};

export default Producto;
