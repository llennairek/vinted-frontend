import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Signup({ handleToken }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email,
          password,
          username,
        }
      );
      handleToken(response.data.token);
      history.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="signup-container">
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="signup-text-input"
          id="signup-text-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          name="signup-text-email"
          id="signup-text-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="signup-text-password"
          id="signup-text-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="S'inscrire" className="button-green" />
      </form>
      <Link to="/login">Tu as déjà un compte? Connecte toi!</Link>
    </div>
  );
}

export default Signup;
