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
      <div className="loader">
        <ImSpinner2 className="spinner" />
      </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {houses.map((house, index) => (
            <Link to={`/property/${house.id}`} key={index}>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
