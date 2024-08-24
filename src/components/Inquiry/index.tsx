import React, { useEffect } from 'react'
import PageHeader from '../Header/Page'
import { handleAccess } from '../../constants/functions'
import FormHeader from '../Form/Header'
import { getPlateInquiry } from '../../utils/User'

const Inquiry = () => {
  const iranFlag = '/images/iran.png'

  useEffect(() => {
    const res = handleAccess('Page1')
    if (res) {
      // if it has access continue, if not stop here and say there is no access
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formElement = e.target

    if (formElement) {
      const formData = new FormData(formElement)

      const country1 = formData.get('country1')
      const country2 = formData.get('country2')

      const pelakPart4 = country1 + country2

      const part2num1 = formData.get('part2num1')
      const part2num2 = formData.get('part2num2')
      const part2num3 = formData.get('part2num3')

      const pelakPart3 = part2num1 + part2num2 + part2num3

      const part1num1 = formData.get('part1num1')
      const part1num2 = formData.get('part1num2')

      const pelakPart1 = part1num1 + part1num2

      const pelakPart2 = formData.get('plateLetter')

      console.log('country1')
      console.log(pelakPart1)
      console.log(pelakPart2)
      console.log(pelakPart3)
      console.log(pelakPart4)

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
    <div className='layoutContainer'>
      <PageHeader title={'استعلام اولیه'} />
      <form onSubmit={handleSubmit} className='mainForm'>
        <div className='formContainer plateForm'>
          <FormHeader text={'شماره پلاک'} />

          <div className='plateInput'>
            <div className='plateCountryInputs'>
              <span>ایران</span>
              <div className='plateInputs'>
                <input name='country2' type='text' className='input' />
                <input name='country1' type='text' className='input' />
              </div>
            </div>
            <div className='plateMainInputsContainer'>
              <div className='plateInputs'>
                <input name='part2num3' type='text' className='input' />
                <input name='part2num2' type='text' className='input' />
                <input name='part2num1' type='text' className='input' />
              </div>
              <div className='plateLetter'>
                <input name='plateLetter' type='text' className='input' />
              </div>

              <div className='plateInputs'>
                <input name='part1num2' type='text' className='input' />
                <input name='part1num1' type='text' className='input' />
              </div>
            </div>

            <div className='blueFlag'>
              <img src={iranFlag} alt='iran flag' className='iranFlag' />
              <span>I.R.</span>
              <span>IRAN</span>
            </div>
          </div>
        </div>
        <button type='submit'>استعلام</button>
      </form>
    </div>
  )
}

export default Inquiry
