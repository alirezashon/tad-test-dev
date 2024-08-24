import styles from './index.module.css'
import Profile from '../Profile'
import Image from 'next/image'
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Image
        alt={'بیمه دی - لوگو - جبران خسارت - تاد'}
        height={222}
        width={222}
        src={'/images/logo.png'}
        className={styles.headerLogo}
      />
      <Profile />
    </div>
  )
}

export default Header
