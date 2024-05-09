import ProductCard from "./ProductCard";

const ProductsList = async ({ categoria }) => {
  try {
    const items = await fetch(
      `${process.env.API_URL}/api/productos/${categoria}`,
      {
        cache: "force-cache",
      }
    ).then((r) => r.json());

    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.length > 0 ? (
          items.map((item) => <ProductCard key={item.slug} item={item} />)
        ) : (
          <div className="col-span-full text-center">
            <h3 className="text-gray-500 font-semibold text-lg">
              No hay productos en esta categoría {categoria}
            </h3>
          </div>
        )}
      </section>
    );
  } catch (error) {
    console.error("Error al obtener los productos de ", categoria, error);
    return (
      <div className="col-span-full text-center">
        <h3 className="text-gray-500 font-semibold text-lg">
          Categoría {categoria} no encontrada
        </h3>
        Error al cargar los productos.
      </div>
    );
  }
};

export default ProductsList;
