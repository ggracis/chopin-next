import OrdersTable from "@/components/admin/OrdersTable";
import AdminLayout from "../layout";

export default function Admin() {
  return (
    <AdminLayout>
      <main className="mb-auto flex flex-col justify-between p-10">
        <h1 className="text-3xl font-bold">Admin panel</h1>
        <hr />
        <hr />
        <OrdersTable />
      </main>
    </AdminLayout>
  );
}
