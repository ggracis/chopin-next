import ProductCard from "./ProductCard";

const ProductsList = async ({ categoria }) => {
  const items = await fetch(
    `http://localhost:3000/api/productos/${categoria}`,
    {
      cache: "force-cache",
    }
  ).then((r) => r.json());

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <ProductCard key={item.slug} item={item} />
      ))}
    </section>
  );
};
export default ProductsList;
