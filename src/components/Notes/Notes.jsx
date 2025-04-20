import Note from '../Note/Note'
import styles from './notes.module.css'

const Notes = ({ filteredNotes, notes, setNotes }) => {
  function handleDeleteNote(uuid) {
    const filteredNotes = notes.filter((note) => note.uuid !== uuid)
    setNotes(filteredNotes)
  }

  return (
    <div className={styles.container}>
      {filteredNotes.length ? (
        filteredNotes.map((note) => {
          return (
            <Note
              key={note.uuid}
              {...note}
              onDelete={handleDeleteNote}
              notes={notes}
              setNotes={setNotes}
            />
          )
        })
      ) : (
        <p className={styles.empty}>Nenhuma nota cadastrada</p>
      )}
    </div>
  )
}

export default Notes
