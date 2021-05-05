import React from "react";
import Button from "../General/Button";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-overlay"></div>
        <div className="container hero-card-wrapper">
          <div className="hero-card">
            <p>Prêts à faire du tri dans vos placards?</p>
            <Button
              text="Commencer à vendre"
              className="button-green button-big"
            />
          </div>
        </div>
      </div>
      <div className="hero-card-phones">
        <p>Prêts à faire du tri dans vos placards?</p>
        <Button text="Commencer à vendre" className="button-green button-big" />
      </div>
    </>
  );
}

export default Hero;
