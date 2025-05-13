import React, { useState } from 'react'

const Controledcomponent = () => {
    const[name,setName]=useState('')

   const handelsubmit = (e)=> {
    e.preventDefault();
    alert("form submitted")
    setName("")
   }
  return (
    <div>
      <form  onSubmit={handelsubmit} >
        <input type="text" placeholder='Enter your name ' value={name} onChange={(e)=>setName(e.target.value)}/> <br /> <br />
        <h1>{name}</h1>
        <input type="submit"  />
      </form>
    </div>
  )
}

export default Controledcomponent

