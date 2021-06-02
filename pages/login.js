import { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/Login.module.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email, password)
    };
    return (
		<>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
			<h1 className={styles.title}>Login</h1>
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
                Login
            </button>
        </form>
		<div className={styles.accountSignUp}>
			<p>Don't have an account? <Link href='/signup' className={styles.signUp}><a className={styles.signUp}>Sign Up</a></Link></p>
		</div>
		</>
    )
}

export default Login