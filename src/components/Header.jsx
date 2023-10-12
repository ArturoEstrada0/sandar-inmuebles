import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import "./Header.css"; // Importa el archivo CSS

const Header = () => {
  return (
    <header className="header"> {/* Asigna la clase CSS aquí */}
      <div className="container mx-auto">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="links"> {/* Asigna la clase CSS aquí */}
          <Link to=""> Iniciar Sesión</Link>
          <Link to=""> Cerrar Sesión</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
