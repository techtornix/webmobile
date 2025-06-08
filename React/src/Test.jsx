import React from 'react'
import useDisplay from './useDisplay'

const 
Test = () => {
    const{display , setdisplay}= useDisplay(false)
  return (
    <div>
      
      <h1>{display?"Hide":"Show"}</h1>
      <button onClick={setdisplay} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>{ display ? "Show" : "Hide"} Data</button>
    </div>
  )
}

export default Test
