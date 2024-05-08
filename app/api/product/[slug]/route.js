import { NextResponse } from "next/server";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/data/firebase";
import { doc, deleteDoc } from "firebase/firestore";

export async function GET(_, { params }) {
  const { slug } = params;
  const q = query(collection(db, "products"), where("slug", "==", slug));
  const querySnapshot = await getDocs(q);
  const docData = querySnapshot.docs[0].data();
  return NextResponse.json(docData);
}

export async function DELETE(_, { params }) {
  const { slug } = params;
  const docRef = doc(db, "products", slug);
  try {
    await deleteDoc(docRef);
    return NextResponse.json({ message: "Producto eliminado exitosamente" });
  } catch (error) {
    return NextResponse.error(new Error("Error al eliminar el producto"), {
      status: 500,
    });
  }
}
