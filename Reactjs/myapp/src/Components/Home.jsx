import React from 'react'
import About from './About'

const Home = () => {
    function hello(name){
        return `hello how are you ? ${name}`
    }
    const notify=()=>{
        alert("class kesi hn ap")
    }
  return (
    <div>
      {/* <h1>hello world</h1> */}
      <h1>{hello("")}</h1>
      <button onClick={notify}>click me</button>

      <About name = "faizan" age = "19"  />


    </div>
  )
}

export default Home
