import { useState } from "react"
import "./style.css"




function App() {
  const [newitem,setNewitem] = useState("")
  const [todos,setTodos]     = useState([])
  
  function handlesubmit(e){
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id:crypto.randomUUID(), title: newitem,
         completed:false},

      ]
    })


  }
  
  return (
    <>
   <form onSubmit={handlesubmit} 
   className="new-item-form">
    <div className="form-row">
      <label> New Item</label>
      <input 
      value={newitem} 
      onChange={e => setNewitem(e.target.value)}
      type="text" id = "item" ></input>
      
    </div>
    <button className="btn"> </button>

   </form>
   <h1 className="header"> Todo List</h1>
   <ul className="list">
     {todos.map(todo => {
      return(
        <li key={todo.id}>
       <label >
        <input type="checkbox" checked = {todo.completed}/>
         {todo.title}
       </label>
       <button className="btn btn-danger">Delete</button>
    </li>
      )
     })}
    
       
   </ul>
   </>
   
  )
}

export default App
