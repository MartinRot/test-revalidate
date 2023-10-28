import db from "../firebase/firebaseConfig";
import { getDocs, query, collection } from "firebase/firestore";

export async function getData({ coleccion }) {

  let q = "";
  q = query(collection(db, coleccion));
  const data = await fetch( getDocs(q), {next:{ revalidate:20 }} )
  const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return {
    props: {
      posts,
    }
  };
} 