import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToFrom from './components/ToFrom'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  // const [count, setCount] = useState(0)
  const [amt, setAmt]=useState(0)
  const [from, setFrom]=useState("inr")
  const [to, setTo]= useState("usd")
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen w-screen text-sm '>
        <div className='h-64 w-[500px] border-2 flex flex-col justify-center relative 
        items-center gap-y-2  bg-gradient-to-r from-white/50 to-white/30'>
          <div className='h-[25px] w-[45px] z-10 absolute top-20 
          left-1/2 -translate-x-1/2 bg-blue-400 border-2 text-center border-blue-700 rounded cursor-pointer'>Swap</div>
          <ToFrom next="From" />
          <ToFrom next="To"/>
          <button className='h-[45px] w-[400px] bg-blue-400 rounded-2xl border-3 border-black mt-4'>Convert {from} to {to}</button>
        </div>


      </div>

    </>
  )
}

export default App
