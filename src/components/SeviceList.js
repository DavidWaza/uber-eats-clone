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
    <div className="container">
      <div className="constant">
        <h1 className="subtext" style={{ marginTop: "30px" }}>
          Choose a Service
        </h1>
        {cardComponent}
      </div>
    </div>
  );
};
export default ServiceList;
