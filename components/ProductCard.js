import styles from '../styles/ProductCard.module.scss';

function ProductCard({name, description, price, imageUrl}) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={imageUrl} alt=""/>
            </div>
            <div className={styles.detail}>
                <p>{name}</p>
                <p>$ {price}</p>
            </div>
        </div>
    )
}

export default ProductCard
