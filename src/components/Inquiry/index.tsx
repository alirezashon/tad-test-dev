import React, { useEffect, useRef, useState } from 'react'
import PageHeader from '../Header/Page'
import { handleAccess } from '../../constants/functions'
import FormHeader from '../Form/Header'
import { getPlateInquiry } from '../../utils/User'
import styles from './index.module.css'
import Image from 'next/image'
import { Toast } from 'primereact/toast'
import { ResInfo } from '@/interfaces'
import FormShow from './FormShow'

interface InquiryProps {}

interface PlateInquiryFormElements extends HTMLFormControlsCollection {
  country1: HTMLInputElement
  country2: HTMLInputElement
  part2num1: HTMLInputElement
  part2num2: HTMLInputElement
  part2num3: HTMLInputElement
  plateLetter: HTMLInputElement
  part1num1: HTMLInputElement
  part1num2: HTMLInputElement
}

interface PlateInquiryForm extends HTMLFormElement {
  elements: PlateInquiryFormElements
}

const Inquiry: React.FC<InquiryProps> = () => {
  const [inputValues, setInputValues] = useState({
    country1: '',
    country2: '',
    part2num1: '',
    part2num2: '',
    part2num3: '',
    plateLetter: '',
    part1num1: '',
    part1num2: '',
  })
  const [response, setRespoonse] = useState<ResInfo | null>()
  const formRef = useRef<PlateInquiryForm | null>(null)

  const toast = useRef<Toast | null>(null)

  useEffect(() => {
    handleAccess('Page1')
  }, [])

  const handleValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    const isNumeric = /^[0-9]*$/.test(value)
    const isPersian = /^[آ-ی]+$/.test(value)
    const isValid =
      name === 'plateLetter'
        ? isPersian && value.length === 1
        : isNumeric && value.length <= 1

    if (!isValid) {
      toast.current?.show({
        severity: 'error',
        summary: 'خطای اعتبارسنجی',
        detail: 'ورودی نامعتبر است. لطفاً فرمت صحیح را وارد کنید.',
      })
    } else {
      // Move to the next input
      const inputs = formRef.current?.elements
      if (inputs) {
        const inputNames = Object.keys(
          inputs
        ) as (keyof PlateInquiryFormElements)[]
        const currentIndex = inputNames.indexOf(
          name as keyof PlateInquiryFormElements
        )

        if (currentIndex < inputNames.length - 1) {
          const nextInput = inputs[
            inputNames[currentIndex + 1]
          ] as HTMLInputElement
          nextInput.focus()
        }
      }
    }

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formElement = formRef.current

    if (formElement) {
      const country1 = formElement.elements.country1.value
      const country2 = formElement.elements.country2.value
      const pelakPart4 = country1 + country2

      const part2num1 = formElement.elements.part2num1.value
      const part2num2 = formElement.elements.part2num2.value
      const part2num3 = formElement.elements.part2num3.value
      const pelakPart3 = part2num1 + part2num2 + part2num3

      const part1num1 = formElement.elements.part1num1.value
      const part1num2 = formElement.elements.part1num2.value
      const pelakPart1 = part1num1 + part1num2

      const pelakPart2 = formElement.elements.plateLetter.value

      if (!pelakPart1 || !pelakPart2 || !pelakPart3 || !pelakPart4) {
        toast.current?.show({
          severity: 'error',
          summary: 'خطای فرم',
          detail: 'لطفاً همه فیلدهای مورد نیاز را به درستی پر کنید.',
        })
        return
      }

      try {
        const res = await getPlateInquiry(
          {
            pelakPart1,
            pelakPart2,
            pelakPart3,
            pelakPart4,
          },
          toast,
          setRespoonse
        )
        setRespoonse(res)
        localStorage.setItem('inquiryRes', JSON.stringify(res))
        // location.href = '/caseInsert/personInfo'
      } catch (error) {
        toast.current?.show({
          severity: 'error',
          summary: 'خطای ارسال',
          detail: 'خطایی در پردازش درخواست شما رخ داده است.',
        })
      }
    }
  }

  return (
    <div className={styles.layoutContainer}>
      <Toast ref={toast} />
      {!response ? (
        <>
          <PageHeader title={'استعلام اولیه'} />
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={styles.mainForm}
          >
            <div className={`${styles.formContainer} ${styles.plateForm}`}>
              <FormHeader text={'شماره پلاک'} />
              <div className={styles.plateInput}>
                <div className={styles.plateCountryInputs}>
                  <span>ایران</span>
                  <div className={styles.plateInputs}>
                    <input
                      type='text'
                      name='country1'
                      onChange={handleValidation}
                      maxLength={1}
                      className={styles.input}
                      dir='ltr'
                      value={inputValues.country1}
                    />
                    <input
                      type='text'
                      name='country2'
                      onChange={handleValidation}
                      maxLength={1}
                      className={styles.input}
                      dir='ltr'
                      value={inputValues.country2}
                    />
                  </div>
                </div>
                <div className={styles.plateMainInputsContainer}>
                  <div className={styles.plateInputs}>
                    <input
                      type='text'
                      name='part2num1'
                      onChange={handleValidation}
                      maxLength={1}
                      className={styles.input}
                      dir='ltr'
                      value={inputValues.part2num1}
                    />
                    <input
                      type='text'
                      name='part2num2'
                      onChange={handleValidation}
                      maxLength={1}
                      className={styles.input}
                      dir='ltr'
                      value={inputValues.part2num2}
                    />
                    <input
                      type='text'
                      name='part2num3'
                      onChange={handleValidation}
                      maxLength={1}
                      className={styles.input}
                      dir='ltr'
                      value={inputValues.part2num3}
                    />
                  </div>
                  <div className={styles.plateLetter}>
                    <input
                      type='text'
                      name='plateLetter'
                      onChange={handleValidation}
                      maxLength={1}
                      className={styles.input}
                      dir='rtl'
                      value={inputValues.plateLetter}
                    />
                  </div>
                  <div className={styles.plateInputs}>
                    <input
                      type='text'
                      name='part1num1'
                      onChange={handleValidation}
                      maxLength={1}
                      className={styles.input}
                      dir='ltr'
                      value={inputValues.part1num1}
                    />
                    <input
                      type='text'
                      name='part1num2'
                      onChange={handleValidation}
                      maxLength={1}
                      className={styles.input}
                      dir='ltr'
                      value={inputValues.part1num2}
                    />
                  </div>
                </div>
                <div className={styles.blueFlag}>
                  <Image
                    width={333}
                    height={333}
                    src={'/images/iran.png'}
                    alt='iran flag'
                    className={styles.iranFlag}
                  />
                  <span>I.R.</span>
                  <span>IRAN</span>
                </div>
              </div>
              <button type='submit' className={styles.button}>
                استعلام
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className={styles.formShowBox}>
          <button
            type='submit'
            onClick={() => setRespoonse(null)}
            className={styles.button}
          >
            استعلام جدید
          </button>
          <FormShow data={response} />
        </div>
      )}
    </div>
  )
}

export default Inquiry
