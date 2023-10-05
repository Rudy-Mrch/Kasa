import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.scss"; // Utilisez le fichier SCSS

const Banner = () => {
  return (
    <header className="Banner">
      <img src="/pictures/LOGO.png" alt="Logo de Kasa" />
      <ul>
        <li>
          <NavLink
            to="/"
            activeClassName="active" 
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName="active"
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Banner;
