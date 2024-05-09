import ProductDetail from "@/components/Product/ProductDetail";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const item = await fetch(`${process.env.API_URL}/api/product/${slug}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return {
    title: "[CHOPIN] " + item.title,
    description: item.description,
    openGraph: {
      images: [
        {
          url: item.image,
          width: 1000,
          height: 1000,
        },
      ],
    },
  };
};

const Producto = ({ params }) => {
  const { slug } = params;
  return (
    <main className="mb-auto flex flex-col justify-between p-10">
      <ProductDetail slug={slug} />
    </main>
  );
};

export default Producto;
