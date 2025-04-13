import Title from '../Title/Title'
import styles from './apptitle.module.css'

const AppTitle = () => {
  return (
    <div className={styles.wrapper}>
      <img src="logo.svg" alt="Notes App Logo" width={24} height={24} />
      <Title.H1>Notes App</Title.H1>
    </div>
  )
}

export default AppTitle
