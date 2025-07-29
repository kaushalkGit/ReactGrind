import React from "react"
import ReactDom from "react-dom/client"
import Navbar from "./components/Navbar" //default Export
import {Productcard} from "./components/Productcard" //Named Export
import Product from "./components/Product"

const App=()=>{
  return <div>
    <Navbar/>
    <Productcard/>
   
  </div>
}

const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<App/>)