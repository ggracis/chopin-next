"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/data/firebase";
import { useAuthContext } from "@/context/AuthContext";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(db, "orders");
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersData = ordersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersData);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pedidos recibidos</h2>
      {orders.length === 0 ? (
        <p>No hay pedidos recibidos</p>
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Fecha y hora</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Dirección</th>
              <th className="px-4 py-2">Carrito</th>
              <th className="px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="border px-4 py-2">
                  {order.timestamp ? order.timestamp.toLocaleString() : ""}
                </td>
                <td className="border px-4 py-2">{order.name}</td>
                <td className="border px-4 py-2">{order.email}</td>
                <td className="border px-4 py-2">{order.address}</td>
                <td className="border px-4 py-2">
                  {order.cart.map((item) => (
                    <div key={item.slug}>
                      {item.title} x {item.quantity}
                    </div>
                  ))}
                </td>
                <td className="border px-4 py-2">
                  {Number(order.totalPrice).toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrdersTable;
