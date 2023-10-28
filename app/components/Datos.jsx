//import { GetStaticProps } from 'next'
import { getData } from "../hooks/getData";

const Datos = async () => {
  
  const coleccion = "productos";
  const data = (await getData({ coleccion })).props.posts;
  //console.log(data)

  return (
    <div className="text-slate-800 text-2xl">

      {data.map((product) => {
        return (
          <>
            <p className="mt-6 mr-4 border-dashed border-2 border-sky-500">
              Producto:{" "}
              <span className="text-red-800 font-semibold">
                {product.name}{" "}
              </span>
              Precio:{" "}
              <span className="text-red-800 font-semibold">
                {product.price}
              </span>
            </p>
          </>
        );
      })}

    </div>
  );
};

export async function getStaticProps() {

  let q = "";
  q = query(collection(db, coleccion));
  const data = await getDocs(q);
  const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
 
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 30, // In seconds
  }
}

export default Datos;




