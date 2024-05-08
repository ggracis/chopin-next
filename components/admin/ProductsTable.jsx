import Image from "next/image";
import Boton from "../UI/Boton";
import Link from "next/link";

const ProductsTable = async () => {
  const products = await fetch("http://localhost:3000/api/productos/todos", {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "10%" }}>Foto</th>
          <th style={{ width: "15%" }}>Nombre</th>
          <th style={{ width: "10%" }}>Slug</th>
          <th style={{ width: "10%" }}>Precio</th>
          <th style={{ width: "10%" }}>Stock</th>
          <th style={{ width: "10%" }}>Categoría</th>
          <th style={{ width: "20%" }}>Descripción</th>
          <th style={{ width: "5%" }}>Rating</th>
          <th style={{ width: "5%" }}>Editar</th>
          <th style={{ width: "5%" }}>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            key={product.id}
            style={{
              borderTop: "1px solid #ccc",
              borderBottom: "1px solid #ccc",
            }}
          >
            <td>
              <Image
                src={product.image}
                alt={product.title}
                width={120}
                height={120}
              />
            </td>
            <td>{product.title}</td>
            <td>{product.slug}</td>
            <td>${product.price}</td>
            <td>{product.stock}</td>
            <td>{product.category}</td>
            <td>{product.description}</td>
            <td>{product.rating}</td>
            <td>
              <Link
                href={`/admin/edit/${product.slug}`}
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Editar
              </Link>
            </td>
            <td>
              <Link
                href={`/admin/delete/${product.slug}`}
                className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Eliminar
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
