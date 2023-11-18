import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/about'
import Home from './pages/home'
import {Route, Routes} from 'react-router-dom'
import Header from './components/header'
import Contact from './pages/contact'
function App() {

  return (
    <>
    <div className="p-{4%}">
      <Header/>
      </div>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path = "/Contact" element= {<Contact />} />
        <Route path = "/About" element= {<About />} />
      </Routes>

    </>
  )
}

export default App
