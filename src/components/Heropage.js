import React from "react";
import "./Heropage.css";
import { HiLocationMarker } from "react-icons/hi";

function HeroPage({buttonClick, onSearchChange}) {

  const markerStyles ={
    marginTop:8,
    fontSize:18
  }

  return (
    <main className="dg">
      <div className="wrapper">
        <div className="Main-Content">
          {/* <img
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/e6b11dc56fb50db03a2e1370a9a7bba5.svg"
            role="img"
            alt={"order your food"}
          /> */}
        </div>
        <div className="dt"></div>
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7fc854e8448107a55583d296c2155d8b.svg"
          role="img"
          alt={"order your food"}
        />
      </div>
        <div className="hero-wrapper">
          <div className="hero-lay">
            <h1 className="hero-text">Order food to your door.</h1>
          </div>
          <div className="input-wrapper">
            <div className="input-wrapper">
              <div className="location-on">
              <HiLocationMarker style={markerStyles}></HiLocationMarker>
              </div>
              <input
                onChange={onSearchChange}
                type="text"
                className="label-box"
                placeholder="Enter your location"
              ></input>
            </div>
            <button className="btn-food" onClick={buttonClick}>Find Food</button>
          </div>
        </div>
    </main>
  );
}

export default HeroPage;
