import Container from './components/Container/Container'
import AddNote from './components/AddNote/AddNote'
import Notes from './components/Notes/Notes'
import useLocalStorage from './hooks/useLocalStorage'
import AppTitle from './components/AppTitle/AppTitle'

const App = () => {
  const [notes, setNotes] = useLocalStorage('notes', [])

  return (
    <Container>
      <AppTitle />
      <AddNote notes={notes} setNotes={setNotes} />
      <Notes notes={notes} setNotes={setNotes} />
    </Container>
  )
}

export default App
