/** @format */

import { ResInfo } from '@/interfaces'
import styles from './index.module.css'
import React, { useState } from 'react'
import Switch from '@/components/Form/Switch'

interface FormComponentProps {
  data: ResInfo
}

const PersonaleInfo: React.FC<FormComponentProps> = ({ data }) => {
  const [isOwner, setIsOwner] = useState(false)
  const [radioSelection, setRadioSelection] = useState<string | null>(null)

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioSelection(event.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.formGroup}>
        <label className={styles.label}>کد ملی</label>
        <input
          className={styles.input}
          type='text'
          value={data.ntnlId}
          readOnly
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>نام و نام خانوادگی</label>
        <input className={styles.input} type='text' value={data.insNam} readOnly />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>کد بیمه نامه</label>
        <input
          className={styles.input}
          type='text'
          value={data.plcyUnqCod}
          readOnly
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>شماره پلاک</label>
        <input className={styles.input} type='text' value={data.plk} readOnly />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>نوع گواهینامه</label>
        <select className={styles.select}>
          <option value=''>گواهینامه عمومی</option>
        </select>
      </div>
      <div className={styles.formGroup}>
              <label className={styles.label}>تاریخ صدور </label>
              <input type='text' className={styles.input} value={data.hisuDte}/>
            </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          آیا مالک خودرو با راننده یکی است؟
        </label>
        <div className={styles.switchContainer}>
          <Switch
            handleState={setIsOwner}
            state={isOwner}
            rightText='بله'
            leftText='خیر'
          />
        </div>
      </div>

      {isOwner && (
        <>
          <div className={styles.formGroup}>     
            <label className={styles.label}>نوع خسارت</label>
            <div className={styles.radioContainer}>
              <label className={styles.label}>
                <input
                  className={styles.input}
                  type='radio'
                  name='damageType'
                  value='type1'
                  checked={radioSelection === 'type1'}
                  onChange={handleRadioChange}
                />
                خسارت نوع 1
              </label>
              <label className={styles.label}>
                <input
                  className={styles.input}
                  type='radio'
                  name='damageType'
                  value='type2'
                  checked={radioSelection === 'type2'}
                  onChange={handleRadioChange}
                />
                خسارت نوع 2
              </label>
            </div>
          </div>
          <div className={styles.formGroup}>
              <label className={styles.label}>تاریخ تولد راننده</label>
              <input type='text' className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>نام و نام خانوادگی راننده</label>
              <input type='text' className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>کد ملی راننده</label>
              <input type='text' className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>نوع گواهینامه راننده</label>
              <input type='text' className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>محدودیت گواهینامه</label>
              <input type='text' className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>تاریخ صدور گواهینامه</label>
              <input type='text' className={styles.input} />
            </div>
        </>
      )}
    </div>
  )
}

export default PersonaleInfo
