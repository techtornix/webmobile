import React from 'react'

const Function = () => {
    function hello() {
        document.writeln("function called");
     }
  return (

 <>
  <h1>we use function definition when we call function in react we not use function call like not use brakets with this</h1>
<button onClick={hello}>Click me</button>

 
 </>
  )
}

export default Function
