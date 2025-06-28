import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import Todo from './components/todo'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (id, todo) => {
    console.log("added")
    setTodos((prev) => [{ id: Date.now(), todo: todo, completed: false }, ...prev])
  }

  const deleteTodo = (id) => {
    console.log("deleted")
    setTodos((prev) => {
      prev.filter(
        (prevTodo) => prevTodo.id !== id
      )
    })
  }

  const updateTodo = (id, todo) => {
    console.log("updated")
    setTodos((prev) => {
      prev.map((prevTodo) => {
        prevTodo.id === id ? todo : prevTodo
      })
    })

  }
  const toggleComplete = (id) => {
    console.log("completed")
    setTodos((prev) => {
      prev.map((prevTodo) => {
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      })
    })
  }

  // local Storage

  //  Loading Data from Storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, []) // Empty array means "run only once when app starts"

  //- Saving Data to Storage
  useEffect(() => {

    localStorage.setItem(JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <div className='bg-black text-white min-h-screen'>
        <div className='flex flex-col justify-center items-center w-full  pt-10 '>
          <h1 className='font-bold text-2xl'>Manage Your Todos</h1>
          <div className='flex justify-center border-b-gray-900 w-1/3 gap-2.5 mt-4'>

            <input placeholder='Enter Your Todo' className='bg-gray-900 text-white border-gray-700 border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'></input>

            <button className='bg-green-600 text-white text-center w-20 rounded-xl cursor-pointer' onClick={addTodo}>Add</button>
          </div>
          {/* loop */}
          <Todo value={{ deleteTodo, addTodo, updateTodo, toggleComplete }} />
        </div>
      </div>


    </>
  )
}

export default App
