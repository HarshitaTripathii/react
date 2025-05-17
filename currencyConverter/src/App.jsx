import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToFrom from './components/ToFrom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen w-screen '>
      <div className='h-64 w-[500px] border-2 flex flex-col justify-center relative items-center gap-y-2 border-indigo-600 bg-gradient-to-r from-white/50 to-white/30'>
      <div className='h-[25px] w-[45px] z-10 absolute top-20 left-1/2 -translate-x-1/2 h-10 w-10 bg-blue-400 border-2 text-center border-blue-700 rounded'>Swap</div>
      <ToFrom />
      <ToFrom />
      <button className='h-[45px] w-[400px] bg-blue-400 rounded-2xl border-3 border-black mt-4'>Convert</button></div>
      
     
    </div>
      
    </>
  )
}

export default App
