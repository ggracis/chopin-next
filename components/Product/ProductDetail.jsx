import { mockData } from "@/data/products";
import Image from "next/image";

const ProductDetail = ({ slug }) => {
  const item = mockData.find((item) => item.slug === slug);

  return (
    <article className="bg-white shadow-md rounded-md overflow-hidden flex flex-col md:flex-row mx-auto">
      <div className="relative md:w-1/2">
        <div className="w-full h-full max-w-sm mx-auto">
          <Image
            src={item.image}
            alt={item.name}
            layout="responsive"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>
      </div>
      <div className="p-4 md:w-1/2 flex flex-col justify-center">
        <h3 className="text-gray-900 font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-500 mt-2">{item.description}</p>
        <p className="text-gray-900 font-semibold mt-2">${item.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
          Agregar al carrito
        </button>
      </div>
    </article>
  );
};

export default ProductDetail;
