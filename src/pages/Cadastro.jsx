import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    usuario: "",
    email: "",
    senha: "",
  });

  const [errors, setErrors] = useState({
    nome: "",
    usuario: "",
    email: "",
    senha: "",
  });

  const validate = (name, value) => {
    const newErrors = { ...errors };

    // Validação de nome completo
    if (name === "nome") {
      if (!value) {
        newErrors.nome = "Nome completo é obrigatório!";
      } else if (value.trim().split(" ").length < 2) {
        newErrors.nome = "Nome completo deve conter pelo menos dois nomes!";
      } else if (/\d/.test(value)) {
        newErrors.nome = "Nome completo não pode conter números!";
      } else {
        newErrors.nome = ""; // Limpa o erro se for válido
      }
    }

    // Validação de email
    if (name === "email") {
      if (!value) {
        newErrors.email = "Email é obrigatório!";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email =
          "Email inválido! O formato deve ser algo como exemplo@dominio.com";
      } else {
        newErrors.email = ""; // Limpa o erro se for válido
      }
    }

    // Validação de senha
    if (name === "senha") {
      if (!value) {
        newErrors.senha = "Senha é obrigatória!";
      } else if (value.length < 6) {
        newErrors.senha = "Senha deve ter pelo menos 6 caracteres!";
      } else {
        newErrors.senha = ""; // Limpa o erro se for válido
      }
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validate(name, value); // Chama a validação após o valor mudar
  };

  const cadastrarUsuario = (e) => {
    e.preventDefault();
    if (Object.values(errors).every((error) => error === "")) {
      setFormData({
        nome: "",
        usuario: "",
        email: "",
        senha: "",
      });
      alert("Usuário Cadastrado");
      console.log(formData);
    }
  };

  return (
    <main id="cadastroPage">
      <div className="container mt-5 bg-white rounded">
        <h2 className="text-center">Cadastre-se</h2>
        <form onSubmit={cadastrarUsuario}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome Completo
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              name="nome"
              placeholder="Digite seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            {errors.nome && (
              <small className="text-danger">{errors.nome}</small>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">
              Usuário
            </label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              name="usuario"
              placeholder="Escolha um nome de usuário"
              value={formData.usuario}
              onChange={handleChange}
              required
            />
            {errors.usuario && (
              <small className="text-danger">{errors.usuario}</small>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
            {errors.senha && (
              <small className="text-danger">{errors.senha}</small>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Cadastrar
          </button>
          <p className="text-center my-2">
            Ja tem uma conta? <Link to={"/login"}>Entre</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Cadastro;
