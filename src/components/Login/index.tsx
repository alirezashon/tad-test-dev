import React, { useRef, useState } from 'react'
import { userLogin } from '../../utils/User'
import styles from './index.module.css'
import Image from 'next/image'
import { Toast } from 'primereact/toast'

const Login = () => {
  const toast = useRef<Toast>(null)
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formElement = e.target

    if (formElement) {
      const formData = new FormData(formElement)

      const username = formData.get('username')
      const password = formData.get('password')
      if (!username || !password) {
        toast.current?.show({
          severity: 'error',
          summary: 'اطلاعات را وارد کنید',
          detail: 'ناموفق',
          life: 3000,
        })
      }
      const result = await userLogin(
        { username: `${username}`, password: `${password}` },
        toast
      )
      if (result === 'success login authenticated') {
        location.href = '/'
      }
    }
  }
  const logo = '/images/logo.png'
  const slogan = '/images/slogan.png'
  const eyeIcon = '/icons/eye.svg'
  const eyeClose = '/icons/eye-closed.svg'

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <>
      <Toast ref={toast} />
      <main className={styles.container}>
        <div className={styles.formBox}>
          <div className={styles.header}>
            <h1 className={styles.title}>ورود به سامانه</h1>
            <p className={styles.description}>
              لطفا اطلاعات خود را برای ورود به سامانه وارد کنید.
            </p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <span>نام کاربری</span>
              <input type='text' name='username' className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <span>رمز عبور</span>
              <div className={styles.passwordContainer}>
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  name='password'
                  className={`${styles.passwordInput} ${styles.input}`}
                />
                <Image
                  width={333}
                  height={444}
                  src={isPasswordVisible ? eyeClose : eyeIcon}
                  alt={isPasswordVisible ? 'Hide password' : 'Show password'}
                  className={styles.inputIcon}
                  onClick={togglePasswordVisibility}
                />
              </div>
              <button className={styles.button} type='submit'>
                ورود
              </button>
            </div>
          </form>
        </div>
        <div className={styles.logoSection}>
          <picture>
            <img src={logo} alt='logo' className={styles.logo} />
          </picture>
          <div className={styles.sloganContainer}>
            <picture>
              <img src={slogan} alt='slogan' className={styles.slogan} />
            </picture>
          </div>
        </div>
      </main>
    </>
  )
}

export default Login
