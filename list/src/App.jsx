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
    setNewitem("")

  }
   function toggleTodo(id,completed){
    setTodos(currentTodos => {
      return(currentTodos.map(todo => {
        if (todo.id ===id ) {
          return{...todo,coompleted}
        }
        return todo
      }))
    })
   }
   function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
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
    {todos.length === 0 && "No Todos"}
     {todos.map(todo => {
      return(
        <li key={todo.id}>
       <label >
        <input type="checkbox" 
        checked = {todo.completed}
        onChange={e => toggleTodo(todo.id, e.target.checked)}
        />
         {todo.title}
       </label>
       <button 
       className="btn btn-danger"
       onClick={() => deleteTodo(todo.id)}
       >
        Delete</button>
    </li>
      )
     })}
    
       
   </ul>
   </>
   
  )
}

export default App
