/** @format */

import styles from './index.module.css'
import PlaceInfo from './PlaceInfo'
import AccidentInfo from './AccidentInfo'
import CarInfo from './CarInfo'
import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import InsuranceInfo from './InsurancePolicy'
import DamagedInfo from './damagedInfo'
import { ResInfo } from '@/interfaces'

const FlowChart: React.FC<{ data: ResInfo }> = ({ data }) => {
  const [state, setState] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [registered, setRegistered] = useState<boolean>(false)
  const flowStates = [
    'اطلاعات فردی',
    'اطلاعات خودرو',
    'اطلاعات حادثه',
    'اطلاعات محل حادثه',
    'اطلاعات بیمه نامه',
    'اطلاعات زیان دیده',
  ]

  const handleFlowChange = async (index: number) => {
    try {
      setIsLoading(true)
      setState(index)
      await new Promise((resolve) => setTimeout(resolve, 77))
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>{flowStates[state]}</h3>
        </div>
        <div className={styles.flow}>
          <div className={styles.flowBase} style={FlowBase}>
            {flowStates.map((domain, index) => (
              <div
                key={index}
                className={`${
                  state !== index ? styles.flowDomain : styles.flowDomainActive
                }`}
                style={FlowDomain}
                onClick={() => handleFlowChange(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.stateContainer}>
          {isLoading ? (
            <p>درحال پردازش...</p>
          ) : state === 0 ? (
            <PersonalInfo data={data} />
          ) : state === 1 ? (
            <CarInfo data={data} />
          ) : state === 2 ? (
            <AccidentInfo />
          ) : state === 3 ? (
            <PlaceInfo />
          ) : state === 4 ? (
            <InsuranceInfo />
          ) : (
            state === 5 && <DamagedInfo />
          )}
        </div>
        {state !== 5 && (
          <button
            onClick={() => setState(state + 1)}
            type='submit'
			style={{marginTop:'1vh',position:'absolute',bottom:'5vh'}}
            className={'button'}
          >
            بعدی
          </button>
        )}
      </div>
    </>
  )
}
export default FlowChart

const FlowBase: React.CSSProperties = {
  width: '80%',
  height: '10%',
  borderRadius: '7vh',
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-around',
  alignItems: 'center',
}
const FlowDomain: React.CSSProperties = {
  width: '7vh',
  height: '7vh',
  borderRadius: '7vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}
