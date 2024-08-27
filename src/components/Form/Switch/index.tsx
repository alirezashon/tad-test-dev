/** @format */

import React from 'react'
import styles from './index.module.css'

interface SwitchProps {
  handleState: (state: boolean) => void
  state: boolean
  rightText: string
  leftText: string
}

const Switch: React.FC<SwitchProps> = ({
  handleState,
  state,
  rightText,
  leftText,
}) => {
  return (
    <div className={styles.switchWrapper}>
      <label
        className={`${styles.label} ${state ? styles.selectedRadio : ''}`}
        onClick={() => handleState(false)}
      >
        {rightText}
      </label>
      <input
        type='checkbox'
        className={styles.switch}
        checked={state}
        onChange={(e) => handleState(e.target.checked)}
      />
      <label
        className={`${styles.label} ${!state ? styles.selectedRadio : ''}`}
        onClick={() => handleState(true)}
      >
        {leftText}
      </label>
    </div>
  )
}

export default Switch
