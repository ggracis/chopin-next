// components/Product/ProductDetail.jsx
import Image from "next/image";
import QtySelector from "./QtySelector";

const ProductDetail = async ({ slug }) => {
  const item = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <article className="bg-white shadow-md rounded-md overflow-hidden flex flex-col md:flex-row mx-auto">
      <div className="relative md:w-1/2">
        <div className="w-full h-full max-w-sm mx-auto">
          <Image
            src={item.image}
            alt={item.title}
            layout="responsive"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>
      </div>
      <div className="p-4 md:w-1/2 flex flex-col justify-center">
        <h3 className="text-gray-900 font-semibold text-lg">{item.title}</h3>

        <p className="text-gray-500 mt-2">{item.description}</p>
        <p className="text-blue-500 text-3xl font-heading font-medium">
          ${item.price}
        </p>
        <QtySelector item={item} />
      </div>
    </article>
  );
};

export default ProductDetail;
