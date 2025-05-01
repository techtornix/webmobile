import React, { useState } from 'react'

// const State = () => {
// let fruite = "Apple"
// function change() {
//   fruite = "Banana"
//   console.log(fruite)
// }
//   return (
//     <div>
//     <h1>{fruite}</h1>
//       <button onClick={change}>change</button>
//     </div>
//   )
// }


const State = () => {
  const [fruite, setFruite] = useState("Apple")
  const [count, setCont] = useState(0)
  return (
    <>
      <h1>{fruite}</h1>
      <button onClick={() => setFruite("Banana")}>Change</button>
      <h1>{count}</h1>
      <button onClick={() => setCont(count + 1)}>Increment</button>
      <button onClick={() => setCont(count - 1)}>Decrement</button>
    </>
  )
}

export default State

