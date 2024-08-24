import styles from './index.module.css'
interface Props {
  children: any
  text: string
}
const Tooltip:React.FC<Props> = ({ children, text }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.tooltiptext}>{text}</span>
    </div>
  )
}

export default Tooltip
