
import './App.css'
import Visitor from './Pages/VisitorPage'
import Event from './Pages/EventPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventProvider from './Context/EventContext';

function App() {
  

  return (
    <>
    <EventProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Visitor/>} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
    </EventProvider>
    </>
  )
}

export default App
