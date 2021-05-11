import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup({ handleToken, userConnected, setUserConnected }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        " https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email,
          password,
          username,
        }
      );
      handleToken(response.data.token);
      setUserConnected({
        account: response.data.account,
        id: response.data._id,
      });
      alert(
        `Bienvenue ${response.data.account.username} ! Vous allez maintenant être redirigé vers la page d'accueil`
      );
      history.push("/");
    } catch (error) {
      console.error(error.response.data.message);
      setError(true);
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="signup-text-input"
            id="signup-text-input"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            name="signup-text-email"
            id="signup-text-email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="signup-text-password"
            id="signup-text-password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            value="S'inscrire"
            className="button-green button-big"
          />
        </form>
        <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
        {error ? <p className="error">{errorMessage}</p> : null}
      </div>
    </div>
  );
}

export default Signup;
