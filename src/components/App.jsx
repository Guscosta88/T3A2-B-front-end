import NewParticipant from './NewParticipant'
import EditParticipant from './EditParticipant'
import ParticipantsList from './ParticipantsList'
import ShoppingList from './ShoppingList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../App.css'

// function App() {

const App = () => {

  return (
      <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={ <NewParticipant /> } />
              <Route path='/participants' element={ <ParticipantsList/> } />
              <Route path='/participant/edit' element={ <EditParticipant /> } />
              <Route path='/shopping' element={ <ShoppingList /> } />
          </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
