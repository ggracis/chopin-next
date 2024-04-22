// product/[slug]/route.js
import { NextResponse } from "next/server";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/data/firebase";

export async function GET(_, { params }) {
  const { slug } = params;

  const q = query(collection(db, "products"), where("slug", "==", slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return NextResponse.error(new Error("Producto no encontrado"), {
      status: 404,
    });
  }

  const docData = querySnapshot.docs[0].data();

  return NextResponse.json(docData);
}
