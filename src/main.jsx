import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './pages/Login.jsx';
import { Layout } from './components/Layout/Layout.jsx';
import { routes } from './routes/routes.jsx';
import Cadastro from './pages/Cadastro.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Rota de Login */}
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />

        {/* Rota Pai (Layout) com rotas filhas dentro */}
        <Route element={<Layout />}>
          {/* Mapeando as rotas do array "routes" */}
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>

        {/* Rota para qualquer página não encontrada */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  </StrictMode>
);
