import React from 'react'

function Footer() {
  return (
    <div className='flex justify-around items-center w-full h-48 bottom-0 fixed z-50 border-2 border-gray-400 shadow-xl shadow-black/30'>
      <img src='/myLogo.png' alt="Logo" className='w-64' />
      <div className='flex justify-between gap-48'>
        <div className='flex flex-col justify-between'>
          <h3 className='font-bold text-gray-700'>Resources</h3>
          <p>dnedi</p>
          <p>nrubeic</p>
          <p>cneube</p>
        </div>
        <div className='flex flex-col justify-between gap-3'>
          <h3 className='font-bold text-gray-700'>Follow Us</h3>
          <p>dnedi</p>
          <p>nrubeic</p>
          <p>cneube</p>
        </div>
        <div className='flex flex-col justify-between'>
          <h3 className='font-bold text-gray-700'>Legal</h3>
          <p>dnedi</p>
          <p>nrubeic</p>
          <p>cneube</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
