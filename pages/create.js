import {useState} from 'react';
import { useRouter } from 'next/router'
import baseUrl from '../helpers/baseUrl';

import styles from '../styles/Create.module.scss';

function Create() {
	const router = useRouter()
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const imageUpload = async () => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'pasalStore');
        data.append('cloud_name', 'saugat');
        const response = await fetch(
            'https://api.cloudinary.com/v1_1/saugat/image/upload',
            {
                method: 'POST',
                body: data,
            }
        ).then((res) => res.json());

        return response.url;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const imageUrl = await imageUpload();
            const response = await fetch(`${baseUrl}/api/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    price,
                    description,
                    imageUrl,
                }),
            }).then((res) => res.json());

            if (response.error) {
                console.log(response.error);
            }else {
				setName('')
				setPrice('')
				setDescription('')
				setImage('')
				router.push('/')
			}
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
			<h1 className={styles.title}>Create Product</h1>
            <input
                type='text'
                name='name'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
            />
            <input
                type='text'
                name='price'
                placeholder='Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={styles.input}
            />
            <input
                type='file'
                accept='image/*'
                onChange={(e) => setImage(e.target.files[0])}
            />
            <img
                src={image ? URL.createObjectURL(image) : ''}
                alt=''
                className={styles.image}
            />
            <input
                type='text'
                name='descrption'
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles.input}
            />
            <button type='submit' className={styles.button}>
                Submit
            </button>
        </form>
    );
}

export default Create;
