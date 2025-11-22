import Header from "./Component/Header"
import Navbar from "./Component/Navbar"
import './app.css'


function App() {


  const style = {
    backgroundColor:"red",
    color:"blue"
  }

  return (
    <>
  <h1 style={style}>Hello This is App </h1>
  <Navbar/>
  <Header/>

    </>
  )
}

export default App
