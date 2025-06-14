import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBTN from './Components/ThemeBTN'

function App() {
  // const [count, setCount] = useState(0)
  const  [themeMode, setthemeMode]=useState("light");
  const darkMode=()=>{
    setthemeMode("dark")
  }
  const lightMode=()=>{
    setthemeMode("light")
  }
useEffect(()=>{
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(themeMode);
}, [themeMode])


  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
    <div className='flex flex-col justify-center items-center min-h-screen bg-background '>
      <h1 className='text-yellow-400 font-bold bg-blue'>Harshita</h1>
      <ThemeBTN />
      
      
    </div>
      
    </ThemeProvider>
  )
}

export default App
