import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './Pages/Login.jsx'
import { Post } from './pages/Post.jsx'
import { Home } from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/post",
    element: <Post/>
  },
  {
    path: "/",
    element: <Home/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
