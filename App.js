
import React from "react"
import ReactDom from "react-dom/client"
const Title=()=>(
   <h1 className="Head">Hey There Am Title</h1>
)
  
let c="Javascript running Heh Error lol JSX"

const Heading2=()=>(
  <div id="container">
    <Title/>
    <Title></Title>
    {Title()}
    <h1 className="heading">This is functional component</h1>
  </div>
);
const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<Heading2/>)

