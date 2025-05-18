import React from 'react'

function ToFrom({next}) {
  return (
    <div className=' h-16 w-[400px] bg-white rounded-2xl border-3 border-black z-1 
    flex justify-between  text-sm'>
      <div>
        <div className='flex flex-col ml-3 mt-1 '>
          <p>{next}</p>
          <input type='text' placeholder='Enter' className='bg-gray-100 rounded p-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'></input>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col mr-3' >
          <p>Currency Type</p>
          <select className='bg-gray-100 rounded p-1 border cursor-pointer border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'>
            <option value='usd'>USD</option>
            <option value='eur'>EUR</option>
            <option value='inr'>INR</option>
            <option value='gbp'>GBP</option>
          </select>
        </div>
      </div>




    </div>
  )
}

export default ToFrom
