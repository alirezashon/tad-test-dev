import React from 'react'
import styles from './index.module.css'
import { ResInfo } from '@/interfaces'

const FormShow: React.FC<{ data: ResInfo }> = ({ data }) => {
  const [selectedItem, setSelectedItem] = React.useState<ResInfo | null>(
    data || null
  )

  if (!selectedItem) {
    return <div>هیچ داده‌ای موجود نیست</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>اطلاعات</h2>
        <div className={styles.field}>
          <label htmlFor='carGrpCod'>کد گروه خودرو</label>
          <input id='carGrpCod' value={selectedItem.carGrpCod} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='cmpCod'>کد شرکت</label>
          <input id='cmpCod' value={selectedItem.cmpCod} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='cmpNam'>نام شرکت</label>
          <input id='cmpNam' value={selectedItem.cmpNam} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='cntryCod'>کد کشور</label>
          <input id='cntryCod' value={selectedItem.cntryCod} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='disFnYrNum'>تعداد سال‌های تخفیف تابع</label>
          <input id='disFnYrNum' value={selectedItem.disFnYrNum} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='disFnYrPrcnt'>درصد تخفیف تابع</label>
          <input id='disFnYrPrcnt' value={selectedItem.disFnYrPrcnt} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='disLfYrNum'>تعداد سال‌های تخفیف طول عمر</label>
          <input id='disLfYrNum' value={selectedItem.disLfYrNum} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='disLfYrPrcnt'>درصد تخفیف طول عمر</label>
          <input id='disLfYrPrcnt' value={selectedItem.disLfYrPrcnt} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='disPrsnYrNum'>تعداد سال‌های تخفیف شخصی</label>
          <input id='disPrsnYrNum' value={selectedItem.disPrsnYrNum} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='disPrsnYrPrcnt'>درصد تخفیف شخصی</label>
          <input
            id='disPrsnYrPrcnt'
            value={selectedItem.disPrsnYrPrcnt}
            readOnly
          />
        </div>
        <div className={styles.field}>
          <label htmlFor='discBdnYrNum'>تعداد سال‌های تخفیف عدم تصادف</label>
          <input id='discBdnYrNum' value={selectedItem.discBdnYrNum} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='fndCst'>هزینه تأسیس</label>
          <input id='fndCst' value={selectedItem.fndCst} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='hbgnDte'>تاریخ شروع بیمه</label>
          <input id='hbgnDte' value={selectedItem.hbgnDte} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='hendDte'>تاریخ پایان بیمه</label>
          <input id='hendDte' value={selectedItem.hendDte} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='hisuDte'>تاریخ تاریخچه</label>
          <input id='hisuDte' value={selectedItem.hisuDte} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='insNam'>نام بیمه</label>
          <input id='insNam' value={selectedItem.insNam} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='lastCmpCod'>کد آخرین شرکت</label>
          <input id='lastCmpCod' value={selectedItem.lastCmpCod} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='lastCmpDocNo'>شماره سند آخرین شرکت</label>
          <input id='lastCmpDocNo' value={selectedItem.lastCmpDocNo} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='mtrNum'>شماره موتور</label>
          <input id='mtrNum' value={selectedItem.mtrNum} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='ntnlId'>کد ملی</label>
          <input id='ntnlId' value={selectedItem.ntnlId} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='plcyUnqCod'>کد منحصر به فرد بیمه‌نامه</label>
          <input id='plcyUnqCod' value={selectedItem.plcyUnqCod} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='plk'>PLK</label>
          <input id='plk' value={selectedItem.plk} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='prdDte'>تاریخ تولید</label>
          <input id='prdDte' value={selectedItem.prdDte} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='prntCmpDocNo'>شماره سند شرکت اصلی</label>
          <input id='prntCmpDocNo' value={selectedItem.prntCmpDocNo} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='shsNum'>شماره شاسی</label>
          <input id='shsNum' value={selectedItem.shsNum} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='typPlcy'>نوع بیمه‌نامه</label>
          <input id='typPlcy' value={selectedItem.typPlcy} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='usgCod'>کد استفاده</label>
          <input id='usgCod' value={selectedItem.usgCod} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='usgNam'>نام استفاده</label>
          <input id='usgNam' value={selectedItem.usgNam} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='vin'>شماره VIN</label>
          <input id='vin' value={selectedItem.vin} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='vehNam'>نام خودرو</label>
          <input id='vehNam' value={selectedItem.vehNam} readOnly />
        </div>
        <div className={styles.field}>
          <label htmlFor='vehSysCod'>کد سیستم خودرو</label>
          <input id='vehSysCod' value={selectedItem.vehSysCod} readOnly />
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.card}>
        <h2>سندهای EDRS</h2>
        {selectedItem?.edrses?.map((edrs) => (
          <div key={edrs.id} className={styles.field}>
            <label htmlFor={`edrsCmpDocNo_${edrs.id}`}>شماره سند EDRS</label>
            <input
              id={`edrsCmpDocNo_${edrs.id}`}
              value={edrs.edrsCmpDocNo}
              readOnly
            />
            <div className={styles.field}>
              <label htmlFor={`edrsTyp_${edrs.id}`}>نوع EDRS</label>
              <input id={`edrsTyp_${edrs.id}`} value={edrs.edrsTyp} readOnly />
            </div>
            <div className={styles.field}>
              <label htmlFor={`mtrnum_${edrs.id}`}>شماره موتور</label>
              <input id={`mtrnum_${edrs.id}`} value={edrs.mtrnum} readOnly />
            </div>
            <div className={styles.field}>
              <label htmlFor={`plk_${edrs.id}`}>PLK</label>
              <input id={`plk_${edrs.id}`} value={edrs.plk} readOnly />
            </div>
            <div className={styles.field}>
              <label htmlFor={`shsNam_${edrs.id}`}>نام شاسی</label>
              <input id={`shsNam_${edrs.id}`} value={edrs.shsNam} readOnly />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.card}>
        <h2>خسارات</h2>
        {Array.isArray(selectedItem.losses) &&
        selectedItem.losses.length > 0 ? (
          selectedItem.losses.map((loss) => (
            <div key={loss.id} className={styles.field}>
              <label htmlFor={`losTyp_${loss.id}`}>نوع خسارت</label>
              <input id={`losTyp_${loss.id}`} value={loss.losTyp} readOnly />
              <div className={styles.field}>
                <label htmlFor={`losDes_${loss.id}`}>توضیحات خسارت</label>
                <input id={`losDes_${loss.id}`} value={loss.hancDte} readOnly />
              </div>
              <div className={styles.field}>
                <label htmlFor={`losDte_${loss.id}`}>تاریخ خسارت</label>
                <input id={`losDte_${loss.id}`} value={loss.hpayDte} readOnly />
              </div>
            </div>
          ))
        ) : (
          <p>هیچ خسارتی یافت نشد.</p>
        )}
      </div>
    </div>
  )
}

export default FormShow
