import { PureComponent, useState } from 'react'
import './App.css'
import Object from './Object'
import Loops from './Loops'
import Conditionalrendring from './Conditionalrendring'
import Controledcomponent from './Controledcomponent'
import Useeffect from './Useeffect'
import Uncontroledcomponents from './Uncontroledcomponents'
import Lifting from './Lifting'
import { Link, NavLink, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Pagenotfound from './Pages/Pagenotfound'
import Component from './Component'
import { UserData } from './Crtcontext'
import Purecomponent from './Purecomponent'
import Test from './Test'
import Dashboard from './Pages/Dashboard'
import Setting from './Pages/Setting'
import Profile from './Pages/Profile'
import Fetchapi from './Fetchapi'
import Api from './Api'
import Apiintegration from './Apiintegration'
import Adduser from './Adduser'




function App() {
  // const [count, setCount] = useState(0)

  // let arr = ["Apple", "Watremelon", "Orange"]

  // let obj = {
  //   Name: "Ali",
  //   age: 20,
  //   class: "BSSE"
  // }

  // const hello = () => {
  //   console.log("this is lifting");

  // }


  return (
    <>
      {/* <Navbar/> */}
      {/* <h1>Hello world</h1> */}
      {/* <Function/> */}
      {/* <Prop name = 'Ali' age =' 20' email = 'muhammadbahawalofficial@gmail.com' image='\src\assets\pic.jpg'  /> */}
      {/* <State/> */}
      {/* <Hideshow/> */}

      {/* <Array arr = {arr}/> */}


      {/* <Object obj = {obj}/> */}
      {/* <Loops/> */}
      {/* <Conditionalrendring/> */}
      {/* <Controledcomponent/> */}

      {/* <Useeffect/> */}
      {/* <Uncontroledcomponents/> */}
      {/* <Lifting prop = {hello}/>
    <MyContext.provider value = "How are youe">

    </MyContext.provider> */}

      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">contact</Link>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Dashboard' element={<Dashboard />}>
          <Route path='Setting' element={<Setting />} />
          <Route path='Profile' element={<Profile />} />
        </Route>
        <Route path='/*' element={<Pagenotfound />} />
      </Routes>
         */}

      {/* 

      <UserData.Provider value='Ahmad'>
        <Component />
      </UserData.Provider> */}

      {/* <Purecomponent/> */}

      {/* <Test/> */}

{/* <Api/> */}

{/* <Fetchapi/> */}

{/* <Apiintegration/> */}
<Adduser/>





    </>
  )
}

export default App
