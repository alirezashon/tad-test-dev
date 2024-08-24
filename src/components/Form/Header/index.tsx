import styles from './index.module.css'
interface Props {
  text: string
}
const FormHeader: React.FC<Props> = ({ text }) => {
  return <div className={styles.formHeader}>{text}</div>
}

export default FormHeader
