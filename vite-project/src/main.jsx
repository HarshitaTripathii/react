import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
  return (
    <div><h1>Heya yashi, how are you</h1></div>
  )
}

const anEle= (
  <a href='www.google com' target='__black'>Click here</a>
)

const reactel= React.createElement(
  'a',
  {
    href: 'www.google.com',target: '__black'
  },
  "it google"
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    <App />
    {/* <MyApp /> can be written like MyApp()   */}
    {anEle}
    {reactel}
  </StrictMode>,
)
