import dynamic from 'next/dynamic'
import styles from './index.module.css'
import { useState } from 'react'

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div className={styles.loadingFooter}></div>,
})
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <div className={styles.loadingHeader}></div>,
})
const Drawer = dynamic(() => import('../components/Drawer'), {
  loading: () => <div className={styles.loadingDrawer}></div>,
})
const Layout = ({ children }: any) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  return (
    <div className={styles.layout}>
      <Header />
      <Drawer setDrawerOpen={setIsDrawerOpen} />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
