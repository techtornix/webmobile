import { useState } from 'react'
import './App.css'
import Object from './Object'
import Loops from './Loops'
import Conditionalrendring from './Conditionalrendring'
import Controledcomponent from './Controledcomponent'
import Useeffect from './Useeffect'
import Uncontroledcomponents from './Uncontroledcomponents'
import Lifting from './Lifting'



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
    <Lifting prop = {hello}/>

    </>
  )
}

export default App

