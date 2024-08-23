import "./Header.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/logo.svg";

export function Header() {
  return (
    <header className="header">
      <figure className="header__logo">
        <img src={logo} alt="Logo de Kasa" />
      </figure>
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/a-propos"
              className={({ isActive }) => (isActive ? "active" : "")}>
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}