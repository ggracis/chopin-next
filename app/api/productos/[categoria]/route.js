import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/data/firebase";
export async function GET(_, { params }) {
  const { categoria } = params;
  const productosRef = collection(db, "products");
  const q =
    categoria === "todos"
      ? productosRef
      : query(productosRef, where("category", "==", categoria));
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map((doc) => doc.data());
  return NextResponse.json(docs);
}
