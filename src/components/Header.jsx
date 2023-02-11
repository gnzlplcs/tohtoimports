import React from "react";
import logoTohto from "../assets/logo003-7.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-container">
        <img src={logoTohto} alt="Logo principal de Tohto Imports" />
      </div>
      <div className="header__title-container">
        <h1>Tohto Imports</h1>
      </div>
    </div>
  );
};

export default Header;
