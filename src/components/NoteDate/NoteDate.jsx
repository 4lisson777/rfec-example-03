import styles from './notedate.module.css'

function formatDate(date) {
  if (!date) return '-'

  date = new Date(date)
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }
  const formattedDate = date.toLocaleDateString('pt-BR', options)
  return formattedDate
}

const NoteDate = ({ size, date }) => {
  return (
    <span className={`${styles.noteDate} ${styles[size]}`}>
      {formatDate(date)}
    </span>
  )
}

export default NoteDate
