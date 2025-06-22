import React from 'react'
import { FaEdit } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";

function todo() {
  return (
    <div className='w-[340px] border-gray-700 border rounded-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 h-[35px] p-3 mt-5'>
        <input type='checkbox' ></input>
        <div className='flex justify-center items-center gap-1'>
        <button><FaEdit /></button>
        <button><IoIosRemoveCircle /></button>
        </div>
        
    </div>
  )
}

export default todo
