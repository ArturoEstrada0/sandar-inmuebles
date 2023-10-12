import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import House from "./House";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import "./HouseList.css"; // Importa el archivo CSS

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="spinner" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="no-results">
        Sorry, nothing found
      </div>
    );
  }

  return (
    <section className="house-list">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
