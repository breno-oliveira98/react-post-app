import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const user = {
  nome: "Breno",
  email: "admin",
  senha: "123",
  tipo: "Administrador"
}

export const Login = () => {
  
const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(false)
  const login = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formValues = {
      email: formData.get("email"),
      senha: formData.get("senha"),
    };

    if (formValues.email === user.email && formValues.senha === user.senha) {
      localStorage.setItem("user", JSON.stringify(user));
      setIsLoggedIn(true)
      navigate("/home");
    } else {
      setIsLoggedIn(false)
      navigate("/login");
    }
    console.log("Enviou", formValues);
  };

 

  return (
    <main className="form-signin w-100 mt-5 mx-auto d-flex justify-content-center">
      <form onSubmit={login}>
        <div className="text-center">
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
        </div>
        <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

        <div className="form-floating">
          <input
            type="text"
            name="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            name="senha"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary text-center">© 2017–2024</p>
      </form>
    </main>
  );
};
