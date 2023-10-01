import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header
      style={{
        padding: "6px",
        marginBottom: "12px",
        borderBottom: "1px solid #000",
      }}
    >
      <div className="container mx-auto flex justify-content-between items-center">
        
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div>
          <Link to=""> Iniciar Sesión</Link>
          <Link to=""> Cerrar Sesión</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
