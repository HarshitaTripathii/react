import React from 'react'

function Footer() {
  return (
    <div className='w-full h-auto md:h-48 bg-white flex flex-col md:flex-row justify-center md:justify-around items-center bottom-0 fixed z-50 border-t border-gray-400 shadow-xl shadow-black/30 p-4 md:p-0'>
      <img src='/myLogo.png' alt="Logo" className='w-32 md:w-64 mb-4 md:mb-0' />
      <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-48'>
        <div className='flex flex-col items-center md:items-start gap-2'>
          <h3 className='font-bold text-gray-700 text-base md:text-lg'>Resources</h3>
          <p className='text-sm md:text-base hover:text-orange-500 cursor-pointer'>dnedi</p>
          <p className='text-sm md:text-base hover:text-orange-500 cursor-pointer'>nrubeic</p>
          <p className='text-sm md:text-base hover:text-orange-500 cursor-pointer'>cneube</p>
        </div>
        <div className='flex flex-col items-center md:items-start gap-2'>
          <h3 className='font-bold text-gray-700 text-base md:text-lg'>Follow Us</h3>
          <p className='text-sm md:text-base hover:text-orange-500 cursor-pointer'>dnedi</p>
          <p className='text-sm md:text-base hover:text-orange-500 cursor-pointer'>nrubeic</p>
          <p className='text-sm md:text-base hover:text-orange-500 cursor-pointer'>cneube</p>
        </div>
        <div className='flex flex-col items-center md:items-start gap-2'>
          <h3 className='font-bold text-gray-700 text-base md:text-lg'>Legal</h3>
          <p className='text-sm md:text-base hover:text-orange-500 cursor-pointer'>dnedi</p>
          <p className='text-sm md:text-base hover:text-orange-500 cursor-pointer'>nrubeic</p>
          <p className='text-sm md:text-base hover:text-orange-500 cursor-pointer'>cneube</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
