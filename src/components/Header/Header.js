import React from "react";
import Logo from "./Logo";
import Button from "../General/Button";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ handleToken, userToken }) {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/">
            <Logo />
          </Link>
          <div className="search-container">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Rechercher des articles"
            />
          </div>
          <div className="buttons-container">
            {userToken ? (
              <Button
                text="Se déconnecter"
                className="button-red"
                handleToken={handleToken}
              />
            ) : (
              <>
                <Link to="/signup">
                  <Button text="S'inscrire" className="button-white" />
                </Link>
                <Link to="/login">
                  <Button text="Se connecter" className="button-white" />
                </Link>
              </>
            )}

            <Button text="Vends tes articles" className="button-green" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
