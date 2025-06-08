import React, { useEffect, useState } from 'react'

const Api = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        find()
    }, [])

    async function find() {
        let url = 'http://localhost:3000/users';
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setData(data.users)



    }
    return (
        <div>
            {data.map(user => (
                <div key={user.id}>
                    <h2>{user.Name}</h2>
                    <li>{user.Age}</li>
                    <p>{user.Class}</p>
                </div>
            ))}
        </div>
    )
}

export default Api
