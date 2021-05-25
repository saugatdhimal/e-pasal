import {useRouter} from 'next/router';
import {useCallback, useState} from 'react';
import Modal from '../../components/Modal';
import baseUrl from '../../helpers/baseUrl';
import styles from '../../styles/Product.module.scss';
function Product({product}) {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = useCallback(() => {
        setShowModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);

    const deleteProduct = async () => {
        await fetch(`${baseUrl}/api/product/${product._id}`, {
            method: 'DELETE',
        });
        router.push('/');
    };

    if (router.isFallback) {
        return <h1>...Loading</h1>;
    }
    return (
        <>
            <div className={styles.container}>
                <h1>{product.name}</h1>
                <img src={product.imageUrl} alt={product.name} />
                <p>{product.price}</p>
                <p>{product.description}</p>
                <div>
                    <input type='number' min='1' placeholder='Quantity' />
                    <button>Add to Cart</button>
                </div>
                <button onClick={handleShowModal}>Delete</button>
            </div>
            <Modal
                showModal={showModal}
                closeModal={handleCloseModal}
                deleteProduct={deleteProduct}
            />
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: [{params: {id: '60a0dc57cdb5c574e724ca68'}}],
        fallback: true,
    };
}

export async function getStaticProps({params}) {
    console.log(params);
    const res = await fetch(`${baseUrl}/api/product/${params.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();

    return {
        props: {product: data},
    };
}

export default Product;
