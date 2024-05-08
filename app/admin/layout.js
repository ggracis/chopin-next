"use client";
import { useAuthContext } from "@/context/AuthContext";
import LoginForm from "@/components/auth/LoginForm";

export default function AdminLayout({ children }) {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    return <LoginForm />;
  }

  return <>{children}</>;
}
