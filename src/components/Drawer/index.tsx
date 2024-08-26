/** @format */
import React, { CSSProperties, useState, useEffect } from 'react'
import externalStyles from './index.module.css'
import { links } from '@/constants/links'
import Link from 'next/link'
import Image from 'next/image'

interface Style {
  drawer: CSSProperties
  item: CSSProperties
  iconName: CSSProperties
}
interface Props {
  setDrawerOpen: (status: boolean) => void
}
const Drawer: React.FC<Props> = ({ setDrawerOpen }) => {
  const [drawerWidth, setDrawerWidth] = useState<number>(5)
  const [isMouseOverDrawer, setIsMouseOverDrawer] = useState<boolean>(false)
  const [selectedIconIndex, setSelectedIconIndex] = useState<number>(0)
  const handleMouseEnter = () => {
    setIsMouseOverDrawer(true)
    setDrawerOpen(true)
  }

  const handleMouseLeave = () => {
    setIsMouseOverDrawer(false)
    setDrawerOpen(false)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    location.pathname === '/'
      ? setSelectedIconIndex(1)
      : location.pathname === '/caseInsert/inquiry'
      ? setSelectedIconIndex(2)
      : location.pathname === '/caseInsert/personInfo'
      ? setSelectedIconIndex(3)
      : location.pathname === '/caseInsert/carInfo' && setSelectedIconIndex(4)
    if (isMouseOverDrawer) {
      interval = setInterval(() => {
        setDrawerWidth((prev) => Math.min(prev + 2, innerWidth > 999 ? 20 : 44))
      }, 10)
    } else {
      interval = setInterval(() => {
        setDrawerWidth((prev) => Math.max(prev - 2, innerWidth > 999 ? 5 : 10))
      }, 10)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isMouseOverDrawer])

  const styles: Style = {
    drawer: {
      transition: 'width 0.7s',
      width: `${drawerWidth}%`,
      display: 'flex',
      height: '120vh',
      zIndex: '3',
    },
    item: {},
    iconName: {
      display: `${drawerWidth > 13 ? 'block' : 'none'}`,
    },
  }

  return (
    <div
      style={styles.drawer}
      className={externalStyles.drawer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={styles.item} className={externalStyles.item}>
        {drawerWidth < 9 ? (
          <picture>
            <img
              src={'/icons/bars.svg'}
              alt='menuBars'
              className={externalStyles.menuBars}
            />
          </picture>
        ) : (
          <Image
            alt={'بیمه دی - لوگو - جبران خسارت - تاد'}
            height={222}
            width={222}
            src={'/images/icon.png'}
            className={externalStyles.headerLogo}
          />
        )}
        {links.map((link, index) => (
          <div
            className={externalStyles.iconBox}
            style={{
              width: '100%',
              display: 'flex',
              backgroundColor: `${
                drawerWidth > 9
                  ? selectedIconIndex === link.key && ' rgb(220, 231, 231)'
                  : ''
              }`,
              justifyContent: `${drawerWidth < 7 ? 'center' : 'space-around'}`,
              padding: '0vh',
            }}
            onClick={() => (location.href = link.to)}
            key={index}
          >
            <Link
              href={link.to}
              key={link.key}
              className={externalStyles.iconRow}
            >
              <Image
                width={66}
                height={66}
                className={externalStyles.icon}
                style={{
                  backgroundColor: `${
                    drawerWidth < 9
                      ? selectedIconIndex === link.key && 'rgb(220, 231, 231)'
                      : ''
                  }`,
                }}
                src={link.icon}
                alt={link.text}
              />
              {drawerWidth > 9 && <p>{link.text}</p>}
              {/* <span>{link.text}</span> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Drawer
