import Title from '../Title/Title'
import Button from '../Button/Button'
import styles from './note.module.css'
import EditNote from '../EditNote/EditNote'
import NoteDate from '../NoteDate/NoteDate'
import { CiStar } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { TbTrash } from 'react-icons/tb'
import Divider from '../Divider/Divider'

const Note = ({
  uuid,
  title,
  content,
  updatedAt,
  isFavorited,
  onDelete,
  notes,
  setNotes
}) => {
  function handleFavorite() {
    const noteToFavorite = notes.find((note) => note.uuid === uuid)
    noteToFavorite.isFavorited = !noteToFavorite.isFavorited
    const updatedNotes = notes.map((note) => {
      if (note.uuid === uuid) return noteToFavorite
      return note
    })
    setNotes(updatedNotes)
  }

  return (
    <div className={styles.note}>
      <div className={styles.wrapper}>
        <NoteDate size="sm" date={updatedAt} />
        <div className={styles.actions}>
          <Button variant="iconButton" onClick={handleFavorite}>
            {isFavorited ? (
              <FaStar size={20} color="var(--yellow)" />
            ) : (
              <CiStar size={20} />
            )}
          </Button>
          <EditNote notes={notes} setNotes={setNotes} uuid={uuid} />
          <Button variant="iconButton" onClick={() => onDelete(uuid)}>
            <TbTrash size={20} />
          </Button>
        </div>
      </div>
      <Title.H3>{title}</Title.H3>
      <Divider />
      <p>{content}</p>
    </div>
  )
}

export default Note
