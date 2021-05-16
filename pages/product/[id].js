import { useRouter } from 'next/router'
import baseUrl from '../../helpers/baseUrl';
function Product({product}) {
    const router = useRouter();
    if(router.isFallback) {
        return <h1>...Loading</h1>
    }
    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [{params: {id: '60a0dc57cdb5c574e724ca68' }}],
        fallback: true
    }
}

export async function getStaticProps({params}) {
    console.log(params)
    const res = await fetch(`${baseUrl}/api/product/${params.id}` , {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
    const data = await res.json()

    return {
        props: {product: data}
    }
}

export default Product
