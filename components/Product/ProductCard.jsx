import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ item }) {
  return (
    <article className="bg-white shadow-md rounded-md overflow-hidden">
      <Link href={`/producto/${item.slug}`}>
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={300}
          className="w-full h-48 object-contain"
        />
        <div className="p-4">
          <h3 className="text-gray-900 font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-900 font-semibold mt-2">${item.price}</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
            Agregar al carrito
          </button>
        </div>
      </Link>
    </article>
  );
}
