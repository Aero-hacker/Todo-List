import React from "react"
import "./style.css"




function App() {
  

  return (
    <>
   <form className="new-item-form">
    <div className="form-row">
      <label> New Item</label>
      <input type="text" id></input>
      
    </div>
    <button className="btn"> </button>

   </form>
   <h1 className="header"> Todo List</h1>
   <ul>
    <li>
       <label >
        <input type="checkbox"/>
        Item 1
       </label>
       <button className="btn btn-danger">Delete</button>
       </li>
       <li>
       <label >
        <input type="checkbox"/>
        Item 2
       </label>
       <button className="btn btn-danger">Delete</button>
       </li>
   </ul>
   </>
   
  )
}

export default App
