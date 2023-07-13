import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import './index.css'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Home from './components/homepage/index'
import Blog from './components/blog/index'
import Blog1 from './components/blog/Blog1(Introduction To Flutter)/Blog1'
import Blog2 from './components/blog/Blog2(IntrotoVimpt1)/Blog2'
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'blog/blog1',
        element: <Blog1 />
      },
      {
        path: 'blog/blog2',
        element: <Blog2 />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
