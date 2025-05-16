import { useCallback, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  const [len, setLength] = useState(4);
  const [num, setNum] = useState(false);
  const [charc, setCharc] = useState(false);
  const [passW, setPassW] = useState("");

  const genPassWord = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (num) str = str + "0123456789";
    if (charc) str = str + "!@#$%^&*()_+";
    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);

    }
    setPassW(pass);
}, [len, num, charc, setPassW])
useEffect(()=>{
  genPassWord();

},[len, num, charc, genPassWord]);
return (
    <>
      <div className='flex flex-col justify-center items-center h-screen text-xs'>
        <div className='w-80 h-24 bg-gray-400 flex flex-col justify-start border-4 ' >
          <p className='bg-gray-400 text-center'>Password generator</p>
          <div className='flex w-full bg-white '>
            <input type="text" placeholder='Generate password' value={passW} readOnly className='bg-white w-full pl-2' />
            <button className='bg-orange-500'>copy</button>
          </div>
          <div className='flex bg-gray-400 '>
            <input type="range" min={4} max={16} value={len} onChange={(e) => { setLength(e.target.value) }} />
            <label className='bg-gray-400 pl-2'>Length :{len}</label>
          </div>
          <div className='bg-gray-400 flex'>
            <input type="checkbox" onChange={() => {setNum((n) => !n)}} />
            <label className='bg-gray-400 text-center pl-2'>Numbers</label>
          </div>
          <div className='bg-gray-400 flex'>
            <input type="checkbox" onChange={() => {setCharc((c) => !c)}} />
            <label className='bg-gray-400 text-center pl-2'>Special Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}


export default App
