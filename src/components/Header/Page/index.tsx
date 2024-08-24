import styles from './index.module.css'
interface Props {
  title: string
}
const PageHeader:React.FC<Props> = ({title}) => {
  return (
    <div className={styles.pageHeader}>{title}</div>
  )
}

export default PageHeader