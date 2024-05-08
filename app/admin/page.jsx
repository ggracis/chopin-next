import ProductsTable from "@/components/admin/ProductsTable";
import Link from "next/link";
import AdminLayout from "./layout";

export default function Admin() {
  return (
    <AdminLayout>
      <main className="mb-auto flex flex-col justify-between p-10">
        <h1 className="text-3xl font-bold">Admin panel</h1>
        <hr />
        <hr />
        <Link
          href={`/admin/create`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 flex justify-center items-center mx-auto"
        >
          Crear producto
        </Link>
        <h2 className="text-2xl font-bold">Productos</h2>
        <ProductsTable />
      </main>
    </AdminLayout>
  );
}
