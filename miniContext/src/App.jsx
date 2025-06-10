import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 bg-gray-400 p-4 rounded-lg shadow-lg">
        Hello Harshita
      </h1>
    </div>
  )
}

export default App
