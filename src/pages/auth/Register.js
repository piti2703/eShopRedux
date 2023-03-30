import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './auth.module.scss'
import registerImg from '../../assets/register.png'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader';
import { useNavigate } from 'react-router-dom';

const Register = () => {

const [email, setEmail]= useState("")
const [password, setPassword]= useState("")
const [cPassword, setCPassword]= useState("")
const [isLoading, setIsLoading]= useState(false)

const navigate = useNavigate()

const registerUser = (e) => {
    e.preventDefault()
    
    if(password !== cPassword) {
        toast.error("Passwords do not match.")
    }
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    setIsLoading(false)
    toast.success("Registration Successful..")
    navigate('/login')
    // ...
  })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false)
    // ..
  });

}

return (
    <>
        <ToastContainer />
        {isLoading && <Loader />}
        <section className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>
                    <h2>Register</h2>
                    <form onSubmit={registerUser}>
                        <input type='text' placeholder='Email'
                        required value={email} onChange={ e => setEmail(e.target.value)} />
                        <input type='password' placeholder='Password'
                        required value={password} onChange={ e => setPassword(e.target.value)} />
                        <input type='password' placeholder='Comfirm Password'
                        required value={cPassword} onChange={ e => setCPassword(e.target.value)} />
                        <button className='--btn --btn-primary --btn-block' type='submit'>Register</button>
                    </form>
                    <span className={styles.register}>
                        <p>Already in account?</p>
                        <Link to='/login'>Login</Link> 
                    </span>
                </div>
            </Card>
            <div className={styles.img}>
                <img src={registerImg} alt='Login' width="400" />
            </div>
        </section>
    </>
  
)
}

export default Register