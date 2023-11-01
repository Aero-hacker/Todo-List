import { useState } from "react"
import "./style.css"




function App() {
  const [newitem,setNewitem] = useState("")
  const [todos,setTodos]     = useState("")
  

  return (
    <>
   <form onSubmit={handlesubmit} 
   className="new-item-form">
    <div className="form-row">
      <label> New Item</label>
      <input 
      value={newitem} 
      onChange={e => setNewitem(e.target.value)}
      type="text" id></input>
      
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
