import React from "react";
import ServiceCards from "./ServiceCards";
import "./Subsection.css";
import "./Services.css";

const ServiceList = ({ services }) => {
  const cardComponent = services.map((user, i) => {
    return (
      <ServiceCards
        id={user.id}
        img={user.img}
        name={user.name}
        detail={user.detail}
        key={i}
      />
    );
  });
  return (
    <div className="row">
      <h4 className="subtext-service">
        Choose a Service
      </h4>
      <div className="constant">
        <div className="container">
          {cardComponent}
          </div>
      </div>
    </div>
  );
};
export default ServiceList;
