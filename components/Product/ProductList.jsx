import { mockData } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductList({ categoria }) {
  const items =
    categoria === "todos"
      ? mockData
      : mockData.filter((item) => item.category === categoria);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <ProductCard key={item.slug} item={item} />
      ))}
    </section>
  );
}
