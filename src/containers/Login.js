import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Login({ handleToken, userConnected, setUserConnected }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://baf-vinted-backend.herokuapp.com/user/login",
        {
          email,
          password,
        }
      );
      handleToken(response.data.token);
      setUserConnected({
        account: response.data.account,
        id: response.data.id,
      });
      alert(
        `Bonjour ${response.data.account.username} ! Vous allez maintenant être redirigé vers la page d'accueil`
      );
      history.push("/");
    } catch (error) {
      console.error(error.message);
      setError(true);
      setErrorMessage("Mauvais email et/ou mot de passe");
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
        {error ? <p className="error">{errorMessage}</p> : null}
      </div>
    </div>
  );
}

export default Login;
