import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const[count ,setCount]= useState(0)
    const[fruit,setFruit] = useState("Apple")

    function check(){
        console.log("thi is use effect")
    }

    useEffect(()=>{
        check()
    },[fruit])
    

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count +1)}>click</button>
      <h1>{fruit}</h1>
      <button onClick={()=>setFruit("Orange")}>change</button>
    </div>
  )
}

export default Useeffect
