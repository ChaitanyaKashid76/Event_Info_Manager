import Visitor from './Pages/VisitorPage'
import Event from './Pages/EventPage'
import { Routes, Route } from 'react-router-dom'
import EventProvider from './Context/EventContext'
import './App.css'

function App() {
  return (
    <EventProvider>
      <Routes>
        <Route path="/" element={<Visitor />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </EventProvider>
  )
}

export default App
