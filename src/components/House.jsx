import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import "./House.css"; // Importa el archivo CSS

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;

  return (
    <div className="house-card"> {/* Asigna la clase CSS aquí */}
      <img className="mb-8" src={image} alt="" />
      <div>
        <div className="badge-type">{type}</div>
        <div className="badge-country">{country}</div>
      </div>
      <div className="address">{address}</div>
      <div className="info-container">
        <div className="info-item">
          <div className="icon">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="info-item">
          <div className="icon">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="info-item">
          <div className="icon">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="price">{price}</div>
    </div>
  );
};

export default House;
