import React from 'react'

const Lifting = ({prop}) => {
    return (
        <div>

            <h1>lifting is use to to transfer function from parent component to child component</h1>
        <button onClick={()=>{prop()}}>click</button>
        </div>
    )
}

export default Lifting
