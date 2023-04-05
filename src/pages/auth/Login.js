import React, { useState } from 'react'
import styles from './auth.module.scss'
import loginImg from '../../assets/login.png'
import { Link } from 'react-router-dom'
import {FaGoogle} from  'react-icons/fa'
import Card from '../../components/Card/Card'

import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/loader/Loader'

import { toast } from 'react-toastify';
import { auth } from '../../firebase/config'





const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading]= useState(false)

    const navigate = useNavigate()


    const loginUser = (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        signInWithEmailAndPassword(getAuth(), email, password)
        .then((userCredential) => {
        //   const user = userCredential.user;
          setIsLoading(false)
          toast.success('Login Successful...')
          navigate('/')
        })
        .catch((error) => {
          setIsLoading(false)
          toast.error(error.message)
        });
        
    }

    
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {

        signInWithPopup(auth, provider)
        .then((result) => {
        //   const user = result.user;
          toast.success('Login Successful...')
          navigate('/')

        }).catch((error) => {
            toast.error(error.message)
        });
    }



  return (

    <>
        {isLoading && <Loader />}
        <section className={`container ${styles.auth}`}>
            <div className={styles.img}>
                <img src={loginImg} alt='Login' width="400" />
            </div>
            <Card>
                <div className={styles.form}>
                    <h2>Login</h2>
                    <form onSubmit={loginUser}>
                        <input type='email' placeholder='Email'
                        required value={email} onChange={ e => setEmail(e.target.value)} />
                        <input type='password' placeholder='Password'
                        required  value={password} onChange={ e => setPassword(e.target.value)} />
                        <button className='--btn --btn-primary --btn-block'>Login</button>
                        <div className={styles.links}>
                            <Link to='/reset'>Reset password</Link>
                        </div>
                        <p>-- or --</p>
                    </form>
                    <button type='submit' className='--btn --btn-danger --btn-block' onClick={signInWithGoogle}><FaGoogle color="#fff" />Login with Google</button>
                    <span className={styles.register}>
                        <p>Don't have account?</p>
                        <Link to='/register'>Register</Link> 
                    </span>
                </div>
            </Card>
        </section>
    
    </>
  )
}

export default Login