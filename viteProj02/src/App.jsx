import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Foot from './components/Foot'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body className='bg-gray-500'>
      <Card musicName="Ranjhana" year="2010"/> <Card musicName="Tere Bin" year ="2015"/>
      <Foot/></body>
      

   
    

    </>
  )
}

export default App
