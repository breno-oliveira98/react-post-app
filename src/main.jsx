import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Post } from './pages/Post.jsx';
import { Home } from './pages/Home.jsx';
import { Contatos } from './pages/Contatos.jsx';
import { Sobre } from './pages/Sobre.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './pages/Login.jsx';
import { Layout } from './components/Layout/Layout.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/login' element={ <Login/> } />

        {/* Layout é a Rota Pai */}
        <Route path='/' element={ <Layout/> }> {/* Tag de abertura do Layout */}

        {/* Rotas Filhas do Layout */}
        <Route index element={ <Home/> } />
        <Route path='post' element={ <Post/> } />
        <Route path='contatos' element={ <Contatos/> } />
        <Route path='sobre' element={ <Sobre/> } />
        {/* Rotas Filhas do Layout */}
        
        </Route>                               {/* Tag de fechamento do Layout */}
        
      </Routes>
    </Router>
  </StrictMode>,
)
