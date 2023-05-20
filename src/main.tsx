import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import App from './App.tsx'
import Enter from './pages/Enter.tsx';
import Navbar from '../src/components/Navbar/Navbar.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    errorElement: <h1>error</h1>,
    children:[
      {
        path:"/write",
        element: <h1>wrrite</h1>,
      },
      {
        path:"/about",
        element: <h1>About</h1>,
      },
      {
        path:"/",
        element: <Enter/>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
