import db from "../firebase/firebaseConfig";
import { getDocs, query, collection } from "firebase/firestore";

export async function getStaticPaths() {

    let q = "";  
    q = query(collection(db, 'productos'));  
    const data = await getDocs(q);  
    const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
   
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id },
    }))
   
    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
    
  }




