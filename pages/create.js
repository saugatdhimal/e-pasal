import {useState} from 'react';

import styles from '../styles/Create.module.scss';

function Create() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [media, setMedia] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, price, media, description);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
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
                onChange={(e) => setMedia(e.target.files[0])}
				
            />
			<img src={media ? URL.createObjectURL(media) : ''} alt=''  className={styles.image}/>
            <input
                type='text'
                name='descrption'
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
				className={styles.input}
            />
            <button type='submit' className={styles.button}>Submit</button>
        </form>
    );
}

export default Create;
