import React from 'react'

const Prop = (props) => {
    return (
        <>
        <h1>Props use to transfer data from one component to an other component </h1>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        <h2>{props.email}</h2>
        <p>on the uper value props is like a parameter and the name is a variable that we use in other components for giving value </p>
        <p>if we want to use image using props we can use this function </p>
        <img src={props.image} alt="error" />
        </>
    )
}

export default Prop