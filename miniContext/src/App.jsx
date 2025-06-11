import { useState } from 'react'
import './App.css'
import UserContextProvider from "./Context/UserContextProvider"
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
        <h1 className="text-4xl font-bold text-blue-600 bg-gray-400 p-4 rounded-lg shadow-lg">
          Hello Harshita
        </h1>
        <div className="flex flex-col gap-4 items-center">
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App
