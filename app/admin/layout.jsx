"use client";
import { useAuthContext } from "@/context/AuthContext";

const AdminLayout = ({ children, login }) => {
  const { user } = useAuthContext();
  return <>{user ? children : login}</>;
};
export default AdminLayout;
