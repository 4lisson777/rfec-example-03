import { useState } from 'react'
import Button from '../Button/Button'
import EditNoteForm from '../EditNoteForm/EditNoteForm'
import { BiEdit } from 'react-icons/bi'

const EditNote = ({ notes, setNotes, uuid }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [editingNote, setEditingNote] = useState({})

  function handleClose(event) {
    if (event.target == event.currentTarget) {
      setIsOpen(false)
    }
  }

  function handleEdit(editedNote) {
    const filteredNotes = notes.filter((note) => note.uuid !== uuid)
    const newNotes = [...filteredNotes, editedNote]
    setNotes(newNotes)
    setIsOpen(false)
  }

  function handleClick() {
    const editingNote = notes.find((note) => note.uuid === uuid)
    setEditingNote(editingNote)
    setIsOpen(true)
  }

  return (
    <>
      <Button variant="iconButton" onClick={handleClick}>
        <BiEdit size={20} />
      </Button>
      {isOpen ? (
        <EditNoteForm
          onClose={handleClose}
          onEdit={handleEdit}
          editingNote={editingNote}
        />
      ) : null}
    </>
  )
}

export default EditNote
