import React from "react";

const sizes ={
  height:200,
}

const ServiceCards = ({ id, name, detail,img }) => {
  return (
        <div className="column">
          <div className="card">
          {/* <img
            src={`https://blush.design/search/building/${id}?200x200`}
            alt="service"
          /> */}
          <div>
            <img src={img} alt="building" style={sizes}/>
            <a href="#hello">
              <h2 className="title">{name}</h2>
              <p className="details">{detail}</p>
            </a>
          </div>
        </div>
        </div>
  );
};

export default ServiceCards;
