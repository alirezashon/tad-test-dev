import dynamic from 'next/dynamic'
import styles from './index.module.css'

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div className={styles.loadingFooter}></div>,
})
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <div className={styles.loadingHeader}></div>,
})
const Menu = dynamic(() => import('../components/Menu'), {
  loading: () => <div className={styles.loadingMenu}></div>,
})
const Layout = ({ children }: any) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Menu />
      <main className={styles.mainContainer}></main>
      <Footer />
    </div>
  )
}

export default Layout
