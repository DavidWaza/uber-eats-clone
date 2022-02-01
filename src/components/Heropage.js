import React, { useState } from "react";
import "./Heropage.css";
import { HiLocationMarker } from "react-icons/hi";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function HeroPage({ buttonClick, onSearchChange }) {
  const markerStyles = {
    marginTop: 8,
    fontSize: 18,
  };
  const [value, setValue] = useState(null);



  return (
    <main className="dg">
      <div className="wrapper">
        <div className="Main-Content"></div>
        <div className="dt"></div>
        <img
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7fc854e8448107a55583d296c2155d8b.svg"
          alt="order your food"
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

            <GooglePlacesAutocomplete
              selectProps={{
                value,
                onChange: setValue,
                styles: {
                  input: (provided) => ({
                    ...provided,
                    color: "black",
                    width: "480px",
                  }),
                  option: (provided) => ({
                    ...provided,
                    color: "black",
                  }),
                },
              }}
              apiKey="apiKey"
            />
          </div>
          <button className="btn-food" onClick={buttonClick}>
            Find Food
          </button>
        </div>
      </div>
    </main>
  );
}

export default HeroPage;
