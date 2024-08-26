import React, { useEffect, useRef } from 'react'
import PageHeader from '../Header/Page'
import { handleAccess } from '../../constants/functions'
import FormHeader from '../Form/Header'
import { getPlateInquiry } from '../../utils/User'
import styles from './index.module.css'
import Image from 'next/image'

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

  const formRef = useRef<PlateInquiryForm | null>(null)

  useEffect(() => {
    const res = handleAccess('Page1')
  }, [])

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

      console.log('country1', pelakPart1, pelakPart2, pelakPart3, pelakPart4)

      const res = await getPlateInquiry({
        pelakPart1,
        pelakPart2,
        pelakPart3,
        pelakPart4,
      })

      console.log(res)
      localStorage.setItem('inquiryRes', JSON.stringify(res))
    }

    location.href = '/caseInsert/personInfo'
  }

  return (
    <div className={styles.layoutContainer}>
      <PageHeader title={'استعلام اولیه'} />
      <form ref={formRef} onSubmit={handleSubmit} className={styles.mainForm}>
        <div className={`${styles.formContainer} ${styles.plateForm}`}>
          <FormHeader text={'شماره پلاک'} />
          <div className={styles.plateInput}>
            <div className={styles.plateCountryInputs}>
              <span>ایران</span>
              <div className={styles.plateInputs}>
                <input name='country2' type='text' className={styles.input} />
                <input name='country1' type='text' className={styles.input} />
              </div>
            </div>
            <div className={styles.plateMainInputsContainer}>
              <div className='plateInputs'>
                <input name='part2num3' type='text' className={styles.input} />
                <input name='part2num2' type='text' className={styles.input} />
                <input name='part2num1' type='text' className={styles.input} />
              </div>
              <div className={styles.plateLetter}>
                <input
                  name='plateLetter'
                  type='text'
                  className={styles.input}
                />
              </div>
              <div className={styles.plateInputs}>
                <input name='part1num2' type='text' className={styles.input} />
                <input name='part1num1' type='text' className={styles.input} />
              </div>
            </div>
            <div className={styles.blueFlag}>
              <Image
                width={333}
                height={333}
                src={ '/images/iran.png'}
                alt='iran flag'
                className={styles.iranFlag}
              />
              <span>I.R.</span>
              <span>IRAN</span>
            </div>
          </div>
          <button type='submit'>استعلام</button>
        </div>
      </form>
    </div>
  )
}

export default Inquiry
