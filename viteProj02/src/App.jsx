import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Card from './components/Card'
import Foot from './components/Foot'


function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState('gray')

  return (
    <>

      <div className='w-full h-screen duration-200  flex justify-center items-center' style={{ backgroundColor: color }}>
        <div className='fixed bottom-10 flex justify-evenly w-full h-20'>
          <Foot setColor={setColor} />
        </div>
        {/* <Card musicName="Ranjhana" year="2010" />  */}
        {/* <Card musicName="Tere Bin" year="2015" /> */}

      </div>






    </>
  )
}

export default App
