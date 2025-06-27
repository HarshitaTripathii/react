import { useState } from 'react'
import './App.css'
import './index.css'
import Todo from './components/todo'

function App() {
  const [todos, setTodos]=useState([]);
  const addTodo=()=>{
  console.log("added")
  }
  const deleteTodo=()=>{
 console.log("deleted")
  }
  const updateTodo=()=>{
 console.log("updated")
  }
  const toggleComplete=()=>{
 console.log("completed")
  }
  

  return (
    <>
    <div className='bg-black text-white min-h-screen'>
    <div className='flex flex-col justify-center items-center w-full  pt-10 '>
      <h1 className='font-bold text-2xl'>Manage Your Todos</h1>
      <div className='flex justify-center border-b-gray-900 w-1/3 gap-2.5 mt-4'>
      <input placeholder='Enter Your Todo' className='bg-gray-900 text-white border-gray-700 border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
      <button className='bg-green-600 text-white text-center w-20 rounded-xl' onClick={addTodo}>Add</button>
      </div>
      <Todo value={{deleteTodo, addTodo, updateTodo, toggleComplete}}/>
    </div>
    </div>
   
   
    </>
  )
}

export default App
