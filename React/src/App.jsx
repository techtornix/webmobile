import { useState } from 'react'
import './App.css'
import Object from './Object'
import Loops from './Loops'
import Conditionalrendring from './Conditionalrendring'
import Controledcomponent from './Controledcomponent'
import Useeffect from './Useeffect'
import Uncontroledcomponents from './Uncontroledcomponents'
import Lifting from './Lifting'
import { Link, NavLink, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'




function App() {
  const [count, setCount] = useState(0)

  let arr = ["Apple","Watremelon","Orange"]
  
  let obj  = {
    Name : "Ali",
    age : 20 ,
    class: "BSSE"
  }

  const hello = () =>{
    console.log("this is lifting");
    
  }


  return (
    <>
    {/* <Navbar/> */}
      {/* <h1>Hello world</h1> */}
      {/* <Function/> */}
    {/* <Prop name = 'Ali' age =' 20' email = 'muhammadbahawalofficial@gmail.com' image='\src\assets\pic.jpg'  /> */}
    {/* <State/> */}
    {/* <Hideshow/> */}

    {/* <Array arr = {arr}/> */}


    {/* <Object obj = {obj}/> */}
    {/* <Loops/> */}
    {/* <Conditionalrendring/> */}
    {/* <Controledcomponent/> */}

    {/* <Useeffect/> */}
    {/* <Uncontroledcomponents/> */}
    {/* <Lifting prop = {hello}/>
    <MyContext.provider value = "How are youe">

    </MyContext.provider> */}

    {/* <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">contact</Link> */}


      {/* <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/About' element = {<About/>}/>
      <Route path='/Contact' element = {<Contact/>}/>
      </Routes> */}

<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/contact'>Contact</Link>

<Routes>
  <Route path='/' element = {<Home/>}/>
  <Route path='/About' element = {<About/>}/>
  <Route path='/Contact' element = {<Contact/>}/>
</Routes>














    </>
  )
}

export default App

