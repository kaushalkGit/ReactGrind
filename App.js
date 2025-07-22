import React from "react"
import ReactDom from "react-dom/client"

const Navbar=()=>{
  return <div className="navbar">
    <h1 >
      Logo
    </h1>
    <ul className="menu-item">
      <li>MEN</li>
      <li>WOMEN</li>
      <li>KIDS</li>
    </ul>
  </div>
}
const App=()=>{
  return <div>
    {<Navbar/>}
   
  </div>
}
const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<App/>)