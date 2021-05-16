import styles from '../styles/ProductCard.module.scss';
import Link from 'next/link'

function ProductCard({product}) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={product.imageUrl} alt=""/>
            </div>
            <div className={styles.detail}>
                <p>{product.name}</p>
                <p>$ {product.price}</p>
                <Link href="/product/[id]" as={`/product/${product._id}`}><a>shop now</a></Link>
            </div>
        </div>
    )
}

export default ProductCard
