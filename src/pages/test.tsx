import Drawer from '@/components/Drawer'
import { useState } from 'react'

const Menu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  return <Drawer setDrawerOpen={setIsDrawerOpen} />
}

export default Menu
