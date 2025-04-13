import styles from './notedate.module.css'

function formatDate(date) {
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }
  const formattedDate = date.toLocaleDateString('pt-BR', options)
  return formattedDate
}

const NoteDate = ({ size, date = new Date() }) => {
  return (
    <span className={`${styles.noteDate} ${styles[size]}`}>
      {formatDate(date)}
    </span>
  )
}

export default NoteDate
