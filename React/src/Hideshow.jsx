import React, { useState } from 'react'

const Hideshow = () => {
const[Display,setDisplay] = useState(true)
  return (

   <>
   <button onClick={() => setDisplay(!Display)}>Toggle</button>
   {
    Display ?<h1>Show</h1> :null
   }
    
   <h1>{Display ? 'Visible' : 'Hidden'}</h1>
    <button onClick={() => setDisplay(!Display)}>Toggle</button>
    {
      Display ?<h1>Show</h1> :null
    }
   </>
  )
}

export default Hideshow
