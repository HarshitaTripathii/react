import { useState, useEffect, useId } from 'react'
import './App.css'
import ToFrom from './components/ToFrom'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  // const [count, setCount] = useState(0)
  const [amt, setAmt] = useState(0)
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")
  const [convertedAmt, setConvertedAmt] = useState(0);


  // calling custom hook : useCurrencyInfo : which is returning an Object : data : is an object
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)


  // for swap button : for swap the from and to men
  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  // for convert button :
  const convert = () => {
    setConvertedAmt(amt * currencyInfo[to]);

  }
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen w-screen text-sm '>

        <div className='h-64 w-[500px] border-2 flex flex-col justify-center relative 
        items-center gap-y-2  bg-gradient-to-r from-white/50 to-white/30'>

          <div
            onClick={swap}
            className='h-[25px] w-[45px] z-10 absolute top-20 
          left-1/2 -translate-x-1/2 bg-blue-400 border-2 text-center border-blue-700 rounded cursor-pointer'>
            Swap</div>
          <ToFrom
            next="From"
            amount={amt}
            currencyOptions={options}
            onAmountChange={(amt) => setAmt(amt)}
            selectCurrency={from}
            onCurrencyChange={(currency) => setFrom(currency)}
          />


          <ToFrom
            next="To"
            amount={convertedAmt}
            currencyOptions={options}
            selectCurrency={to}
            onCurrencyChange={(currency) => { setTo((currency)) }}


          />
          <button className='h-[45px] w-[400px] bg-blue-400 rounded-2xl border-3 border-black mt-4'
            onClick={convert}>Convert {from} to {to}</button>
        </div>


      </div>

    </>
  )
}

export default App
