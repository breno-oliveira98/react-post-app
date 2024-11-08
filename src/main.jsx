import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './Pages/Login.jsx';
import { Post } from './pages/Post.jsx';
import { Home } from './pages/Home.jsx';
import { Contato } from './pages/Contato.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sobre } from './pages/Sobre.jsx';

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
