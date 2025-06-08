import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams();
  
  return (
        <div className='flex justify-center items-center'>
    <div className='w-44 h-48 text-center p-4 m-4 bg-white rounded-lg shadow-md mt-24 flex justify-center items-center'>
      <h2 className='text-2xl font-bold text-orange-950'>User: {userid}</h2>
    </div>
    </div>
  )
}

export default User
