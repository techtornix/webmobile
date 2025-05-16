import React from 'react'
import useDisplay from './useDisplay'

const 
Test = () => {
    const{display , setdisplay}= useDisplay(false)
  return (
    <div>
      
      <h1>{display?"Hide":"Show"}</h1>
      <button onClick={setdisplay}>{ display ? "Show" : "Hide"} Data</button>
    </div>
  )
}

export default Test
