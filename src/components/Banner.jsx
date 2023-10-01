import React from "react";
import Image from "../assets/img/house-banner.png"
import Search from "./Search";

const Banner = () => {
  return (
    <section>
      <div>
        <div>
          <h1>
            <span>Sandar Inmuebles</span> Con nosotros encontraras la casa de tus sueños.
          </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur amet autem ex provident, assumenda nostrum illo corrupti vitae dicta vero, optio totam error explicabo placeat alias quisquam, recusandae asperiores iure!</p>
        </div>
        <div>
            <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
