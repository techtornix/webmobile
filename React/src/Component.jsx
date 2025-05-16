import React, { useContext } from 'react'
import { UserData } from './Crtcontext'

const Component = () => {
  const Name = useContext(UserData)
  return (
    <div>
      <h1>My name is:{Name}</h1>
    </div>
  )
}

export default Component
