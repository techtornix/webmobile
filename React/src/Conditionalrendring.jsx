import React from 'react'
import { useState } from 'react'

const Conditionalrendring = () => {
  const[login , setLogin] = useState(false)
  return (
    <div>
      <h1>{login?"welcom":"please login"}</h1>
      <button onClick={()=>setLogin(!login)}>{login?"logout":"login "}</button>
    </div>
  )
}

export default Conditionalrendring
