import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "./Search";
import "./Banner.css"; // Importa el archivo CSS

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>
            <span className="brand-name">Sandar Inmuebles</span> Con nosotros encontrarás la casa de tus sueños.
          </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur amet autem ex provident, assumenda nostrum illo corrupti vitae dicta vero, optio totam error explicabo placeat alias quisquam, recusandae asperiores iure!</p>
        </div>
        <div className="banner-image">
          <img src={Image} alt="Imagen de la casa" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
