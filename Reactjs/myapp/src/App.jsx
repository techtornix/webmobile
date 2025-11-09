import { Link, Routes , Route } from 'react-router-dom'
import './app.css'

import Home from './Pages/Home'
import About from './Pages/About'

function App() {


  return (
    <>
      <nav>
        <Link className='home' to='/'>Home</Link> 
        <Link to='/about'>About</Link>
        
      </nav>

      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
      </Routes>

    </>
  )
}

export default App
