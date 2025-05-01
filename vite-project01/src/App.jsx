import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter =0;
  let [counter, setCounter] = useState(0);
  function changeAdd() {
    if(counter<10)
    {
      counter = counter + 1;
    }
    
    setCounter(counter);
    console.log(`clicked ${counter}`);
  }
  function changeRemove()
  {
    if(counter>0)
    {
      counter=counter-1;
    }
  
    setCounter(counter);
  }
  return (
    <>
      <h1>Counter Game</h1>
      <button onClick={changeAdd}>Add Value  {counter}</button>
      <button onClick={changeRemove}>Remove Value {counter}</button>


    </>
  )
}

export default App
