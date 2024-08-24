import { links } from '../../constants/links'
import styles from './index.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
  const bars = '/icons/bars.svg'
  const icon = '/images/icon.png'
  const logout = '/icons/logout.svg'

  const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('roleName')
    location.href = '/'
  }

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuBar}>
        <Image
          width={444}
          height={444}
          className={styles.menuContainerImage}
          src={bars}
          alt={styles.menuBars}
        />
      </div>

      <ul className={styles.menuList}>
        {links.map((link) => (
          <Link href={link.to} key={link.key}>
            <li>
              <Image
                width={444}
                height={444}
                className={styles.menuListImage}
                src={link.icon}
                alt={link.text}
              />
              {/* <span>{link.text}</span> */}
            </li>
          </Link>
        ))}
      </ul>

      <div className={styles.menuLogout} onClick={logOut}>
        <Image width={444} height={444} src={logout} alt='logout' />
      </div>
    </div>
  )
}

export default Menu
