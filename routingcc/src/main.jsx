import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Layout from './Layout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, About, Contact, User } from './components/index.js'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />, 
      // <Outlet /> is the placeholder where child route components are rendered. 

      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "home",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "user/:userid",
          element: <User />
        }
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
