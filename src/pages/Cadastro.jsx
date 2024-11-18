import React from "react";
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
    <main id="cadastroPage">
        <div className="container mt-5 bg-white rounded">
          <h2 className="text-center">Cadastre-se</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome Completo
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                placeholder="Digite seu nome completo"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">
                Usuário
              </label>
              <input
                type="text"
                className="form-control"
                id="usuario"
                placeholder="Escolha um nome de usuário"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Digite seu email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="senha" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="senha"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmarSenha" className="form-label">
                Confirmar Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmarSenha"
                placeholder="Confirme sua senha"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Cadastrar
            </button>
            <p className="text-center my-2">Ja tem uma conta? <Link to={"/login"}>Entre</Link></p>
          </form>
        </div>
    </main>
  );
};

export default Cadastro;
