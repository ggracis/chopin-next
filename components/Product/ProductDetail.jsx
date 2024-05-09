// components/Product/ProductDetail.jsx
import Image from "next/image";
import QtySelector from "./QtySelector";

const ProductDetail = async ({ slug }) => {
  try {
    const item = await fetch(`${process.env.API_URL}/api/product/${slug}`, {
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
              placeholder="empty"
            />
          </div>
        </div>
        <div className="p-4 md:w-1/2 flex flex-col justify-center">
          <h3 className="text-gray-900 font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-500 mt-2">
            <em>[ Categoría: {item.category} ] </em>
            {item.description}
          </p>
          <p className="text-blue-500 text-3xl font-heading font-medium">
            {Number(item.price).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </p>
          <p className="text-sm text-gray-500">
            {item.stock > 0 ? (
              <span className="text-green-500">
                (Sólo quedan {item.stock} unidades)
              </span>
            ) : (
              ""
            )}
          </p>
          <QtySelector item={item} />
        </div>
      </article>
    );
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return (
      <div>
        <h3 className="text-red-800 font-semibold text-lg">
          Producto no encontrado
        </h3>
        Error al cargar el producto.
      </div>
    );
  }
};

export default ProductDetail;
