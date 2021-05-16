
import ProductCard from '../components/ProductCard'
import baseUrl from '../helpers/baseUrl'
import styles from '../styles/Home.module.scss'

export default function Home({products}) {
  return (
    <div className={styles.container}>
      {products.map((product) => {
        return (<ProductCard key={product._id} product={product}/>)
      })}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/products` , {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()

  return {
    props: {
      products: data
    }
  }
  
}
