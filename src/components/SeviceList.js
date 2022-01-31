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
<h1 className='subtext' style={{marginLeft:10, marginTop:"30px"}}>Choose a Service</h1>
    {cardComponent}
    </div>
    );
};
export default ServiceList;
