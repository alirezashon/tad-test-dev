import styles from './index.module.css'
interface Props {
  title: string
  name: string
}
const Input: React.FC<Props> = ({ title, name }) => {
  return (
    <div className={styles.inputContainer}>
      {title}
      <input name={name} type='text' />
    </div>
  )
}

export default Input
