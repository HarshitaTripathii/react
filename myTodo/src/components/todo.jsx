import React from 'react'
import useTodo from "../context/TodoContext";
import { FaEdit } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";

function todo() {
  const {addTodo, updateTodo,deleteTodo, toggleComplete }=useTodo();
  return (
    <div className='w-[340px] border-gray-700 border rounded-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 h-[35px] p-3 mt-5'>
        <input type='checkbox' checked={toggleComplete}></input>
        <div className='flex justify-center items-center gap-1'>
        <button onClick={updateTodo}><FaEdit className='text-green-500' /></button>
        <button onClick={deleteTodo}><IoIosRemoveCircle className='text-red-500' /></button>
        </div>
        
    </div>
  )
}

export default todo
