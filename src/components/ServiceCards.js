import React from "react";

const sizes = {
  height: "250px",
  width: "100%",
};

const ServiceCards = ({ id, name, detail, img }) => {
  return (
    <div className="card">
      <img src={img} alt="building" style={sizes} />
      <a href="#hello">
        <h2 className="title">{name}</h2>
        <p className="details">{detail}</p>
      </a>
    </div>
  );
};

export default ServiceCards;
