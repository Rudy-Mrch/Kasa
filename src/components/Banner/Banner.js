import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <header className="Banner">
      <img src="/pictures/LOGO.png" alt="Logo de Kasa" />
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Banner;
