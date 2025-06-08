import React, { useEffect, useState } from 'react'

const Apiintegration = () => {
const [show , setShow] = useState([]);

    useEffect(()=>{
        fetchdata();

    },[])
    const fetchdata = async () => {
        const url = "http://localhost:3000/users";
        let response = await fetch(url);
        let data  = await response.json();
        console.log(data);
        setShow(data)
    }
  return (
    <div>
      <h1>integrate local server api to your site</h1>
      {show.map((user)=>(
        <h1 key={user.Name}>{user.Name}</h1>
      ))}
    </div>
  )
}

export default Apiintegration
