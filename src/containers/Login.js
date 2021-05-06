import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Login({ handleToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email,
          password,
        }
      );
      handleToken(response.data.token);
      history.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="login-text-email"
            id="login-text-email"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="login-text-password"
            id="login-text-password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            value="Se connecter"
            className="button-green button-big"
          />
        </form>
        <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
      </div>
    </div>
  );
}

export default Login;
