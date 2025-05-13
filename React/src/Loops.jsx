import React from 'react'

const Loops = () => {
  let arr = ["Apple",1,2,3,4,5,6,"orange","Hello"]
  let user = [
    
     { id :1, name :"Ali",age:"20",class:"BSSE"},
    //  { id :2, name :"Adeel",age:"21",class:"BSCS"},
     { id :3, name :"Asad",age:"22",class:"BSIT"}
   
  ]
  return (
    <div>
      {/* {arr.map((a,index)=>(
        <li key={index}>{index}------------{a}</li>
      ))} */}

      {
        user.map((element)=>(
          <li key={user.id}>{element.name}</li>
        ))
      }
    </div>
  )
}

export default Loops

