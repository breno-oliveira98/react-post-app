import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Post } from './pages/Post.jsx';
import { Home } from './pages/Home.jsx';
import { Contato } from './pages/Contato.jsx';
import { Sobre } from './pages/Sobre.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/post",
    element: <Post/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/contato",
    element: <Contato/>
  },
  {
    path: "/sobre",
    element: <Sobre/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
