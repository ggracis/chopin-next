import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ item }) {
  const generateMetadata = (item) => {
    const title = item.title;
    const description = `Check out ${title} - a fantastic product!`; // Adjust description as needed
    const image = item.image; // Assuming the image URL is in item.image
    const url = `/producto/${item.slug}`;

    return {
      title,
      description,
      image,
      url,
    };
  };

  const metadata = generateMetadata(item);

  return (
    <article
      key={item.slug}
      className="bg-white shadow-md rounded-md overflow-hidden"
    >
      <Link href={`/producto/${item.slug}`}>
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={300}
          className="w-full h-48 object-contain rounded-t-md cursor-pointer"
          placeholder="empty"
        />
        <div className="p-4">
          <h3 className="text-gray-900 font-semibold text-lg">{item.title}</h3>
          <p className="text-blue-500 text-3xl font-heading font-medium">
            <span>
              {Number(item.price).toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}
