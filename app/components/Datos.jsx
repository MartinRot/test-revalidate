
//import { GetStaticProps } from 'next'
import { getStaticProps } from '../hooks/fetchData'

const Datos = async () => {

    const coleccion = 'productos'

    const data = (await getStaticProps({ coleccion })).props.posts
    
    //console.log(data)

  return (
    <div className='text-slate-800 text-2xl'>

        {
            data.map((product) => {
                return <>
                    <p className='mt-6 mr-4 border-dashed border-2 border-sky-500'>
                        Producto: <span className='text-red-800 font-semibold'>{product.name} </span>
                        Precio: <span className='text-red-800 font-semibold'>{product.price}</span>
                    </p>
                
                </>
            })

        }
                
                      
    </div>
  )

}

export default Datos