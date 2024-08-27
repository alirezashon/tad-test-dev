import styles from './index.module.css'
import { ResInfo } from '@/interfaces'
interface FormComponentProps {
  data: ResInfo
}
const CarInfo: React.FC<FormComponentProps> = ({ data }) => {

  return (
    <div className={styles.container}>
      <div className={styles.formGroup}>
        <label className={styles.label}>نوع وسیله</label>
        <input
          className={styles.input}
          type='text'
          value={data.usgNam}
          readOnly
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>رنگ</label>
        <input className={styles.input} type='text' value={''} readOnly />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>ظرفیت وسیله نقلیه</label>
        <input className={styles.input} type='text' value={''} readOnly />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>شماره موتور</label>
        <input
          className={styles.input}
          type='text'
          value={data.mtrNum}
          readOnly
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>شماره VIN</label>
        <input className={styles.input} type='text' value={data.vin} readOnly />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>توضیحات</label>
        <textarea name='' id=''></textarea>
      </div>
    </div>
  )
}
export default CarInfo
