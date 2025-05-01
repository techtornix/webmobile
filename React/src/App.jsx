import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Function from './Function'
import Prop from './Prop'
import State from './State'
import Hideshow from './HIdeshow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
      {/* <h1>Hello world</h1> */}
      {/* <Function/> */}
    {/* <Prop name = 'Ali' age =' 20' email = 'muhammadbahawalofficial@gmail.com' image='\src\assets\pic.jpg'  /> */}
    {/* <State/> */}
    <Hideshow/>
    </>
  )
}

export default App

