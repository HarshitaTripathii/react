import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body className='bg-gray-600'>

      </body>
      {/* <h1 className='bg-white text-black p-4 h-15 w-fit mx-auto'>Harshita Tripathi</h1> */}
      <div class="flex flex-row justify-center items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img class="size-48 shadow-xl rounded-md" alt="" src="/images.jpeg" />
        </div>
        <div class="flex flex-col items-center md:items-start">
          <span class="text-2xl font-medium">Class Warfare</span>
          <span class="font-medium text-sky-500">The Anti-Patterns</span>
          <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default App
