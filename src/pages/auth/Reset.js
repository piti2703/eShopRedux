import React, { useState } from 'react'
import styles from './auth.module.scss'
import forgotImg from '../../assets/forgot.png'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { toast } from 'react-toastify'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase/config'
import Loader from '../../components/loader/Loader'

const Reset = () => {

    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading]= useState(false)

    const resetPassword = (e) => {
        e.preventDefault()
        setIsLoading(true)

        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success("Check your email for a reset link")
            setIsLoading(false)
        })
        .catch((error) => {
            toast.error(error.message)
            setIsLoading(false)
        });
        
    }

  return (
    <>
        { isLoading && <Loader />}
        <section className={`container ${styles.auth}`}>
    
            <div className={styles.img}>
                <img src={forgotImg} alt='Login' width="400" />
            </div>
            <Card>
                <div className={styles.form}>
                    <h2>Reset Password</h2>
                    <form onSubmit={resetPassword}>
                        <input type='email' placeholder='Email'
                        required value={email} onChange={ e => setEmail(e.target.value)} />
                        <button className='--btn --btn-primary --btn-block' type='submit'>Login</button>
                        <div className={styles.links}>
                          <p>
                          <Link to='/login'>- Login</Link>
                          </p>
                          <p>
                          <Link to='/register'>- Register</Link>
                          </p>
                        </div>
                    </form>
                </div>
            </Card>
        </section>
    </>
)
  
}

export default Reset