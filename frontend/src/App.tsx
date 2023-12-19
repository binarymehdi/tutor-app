import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/about'
import Home from './pages/home'
import {Route, Routes} from 'react-router-dom'
import Header from './components/header'
import Contact from './pages/contact'
import Sessions from './components/sessions/Sessions'
import Tutors from './components/tutors/Tutors'
import Dashboard from './components/dashboard/Dashboard'
function App() {

  return (
   <div>

 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path = "/Contact" element= {<Contact />} />
        <Route path = "/About" element= {<About />} />
        <Route path = "/Sessions"element = {<Sessions/>} />
        <Route path = "/Tutors"element = {<Tutors/>} />
        <Route path = "/Dashboard" element = {<Dashboard/>} />
        </Routes>
      </div>
  )
}

export default App
