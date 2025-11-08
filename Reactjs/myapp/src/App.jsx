import { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'


function App() {

  const [count ,setCount] = useState("Ali")
  const [count1 ,setCount1] = useState(0)
  const inputref = useRef()


  
  useEffect(()=>{
    console.log("this is our class");
    
  },[count])

  function handelref()
{
  inputref.current.focus()
}
  return (
    <>
      {/* <Navbar/> */}
     <Home/>
     {/* <About name = "Ali" age = "20"  />
     <button onClick={()=>setCount(count+"faizan")} onDoubleClick={()=>setCount1(count+1)}>click {count} {count1}</button> */}
     <input ref={inputref} type="text" name="" placeholder='type text....' id="" /> <br /> <br />
     <button onClick={handelref} >click me</button>

    </>
  )
}

export default App
