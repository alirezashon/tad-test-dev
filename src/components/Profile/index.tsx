import Tooltip from '../Tooltip/'
import styles from './index.module.css'
import Image from 'next/image'

const Profile = () => {
  const profile = '/icons/profile.png'
  const arrow = '/icons/direction.png'

  const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('roleName')
    location.href = '/'
  }

  return (
    <div className={styles.profileContainer}>
      <Tooltip text={'خروج از برنامه'}>
        <div className={styles.profileInfo}>
          <span>نام کاربری</span>
          <span>09122362563</span>
          <div className={styles.logOutButton} onClick={logOut}>
            <Image
              width={444}
              height={444}
              src={arrow}
              alt='arrow'
              className={styles.logOutIcon}
            />
          </div>
        </div>
      </Tooltip>

      <Image
        width={222}
        height={222}
        src={profile}
        alt='profile'
        className={styles.profileImage}
      />
    </div>
  )
}

export default Profile
