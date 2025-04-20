import Container from './components/Container/Container'
import Notes from './components/Notes/Notes'
import useLocalStorage from './hooks/useLocalStorage'
import AppTitle from './components/AppTitle/AppTitle'
import Search from './components/Search/Search'
import { useState } from 'react'

function checkStringsMatch(str1, str2) {
  return str1.toLocaleLowerCase().includes(str2.toLocaleLowerCase())
}

const App = () => {
  const [notes, setNotes] = useLocalStorage('notes', [])
  const [filter, setFilter] = useState('')

  const filteredNotes = notes.filter(
    (note) =>
      checkStringsMatch(note.title, filter) ||
      checkStringsMatch(note.content, filter)
  )

  return (
    <Container>
      <AppTitle />
      <Search setFilter={setFilter} />
      <Notes filteredNotes={filteredNotes} notes={notes} setNotes={setNotes} />
    </Container>
  )
}

export default App
