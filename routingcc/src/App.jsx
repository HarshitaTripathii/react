import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <About /> */}
      <Contact />
      <Footer />

    </>
  )
}

export default App
