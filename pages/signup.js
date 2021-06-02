import { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/SignUp.module.scss';

function Signup() {
	const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email, password)
    };
    return (
		<>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
			<h1 className={styles.title}>Sign Up</h1>
            <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
            />
            <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
            />
            <button type='submit' className={styles.button}>
                Sign Up
            </button>
        </form>
		<div className={styles.accountLogin}>
			<p>Already have an account? <Link href='/login' className={styles.login}><a className={styles.login}>Login</a></Link></p>
		</div>
		</>
    )
}

export default Signup