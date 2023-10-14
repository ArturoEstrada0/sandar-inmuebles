import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container mx-auto">
        <Link to="/">
          <img src={Logo} alt="Logo de la Inmobiliaria" className="logo" />
        </Link>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/inicio-sesion" className="nav-link">
                Iniciar Sesión
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cerrar-sesion" className="nav-link">
                Cerrar Sesión
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
