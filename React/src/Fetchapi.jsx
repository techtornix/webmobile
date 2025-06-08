import React, { useEffect, useState } from 'react'

const Fetchapi = () => {
  const [user , setUser] = useState([]);


  useEffect(()=>{
    find();
  },[])

  async function find () {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json()

    // console.log(response);
    setUser(response.users)
    


  }


  return (
    <div>
     {
      user && user.map((user)=>(
        <h1 key = {user.id}>{user.firstName}</h1>
      ))
     }

    </div>
  )
}

export default Fetchapi
