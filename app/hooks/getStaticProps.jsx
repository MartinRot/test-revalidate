import db from "../firebase/firebaseConfig";
import { getDocs, query, collection } from "firebase/firestore";

export async function getStaticProps({ coleccion }) {
  let q = "";

  q = query(collection(db, coleccion));

  const data = await getDocs(q);

  const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return {
    props: {
      posts,
    },
      revalidate: 30,
  };
}
