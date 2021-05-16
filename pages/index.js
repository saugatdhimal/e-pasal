
import ProductCard from '../components/ProductCard'
import styles from '../styles/Home.module.scss'

export default function Home({products}) {
  return (
    <div className={styles.container}>
      {products.map((product) => {
        return (<ProductCard key={product._id} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl} />)
      })}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products' , {
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
