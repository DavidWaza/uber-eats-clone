import React from "react";
import "./App.css";
import Heropage from "./components/Heropage";
import Subsection from "./components/Subsection";
import {  useState } from "react";
import Topnav from "./components/Topnav";
import GoogleMaps from "./components/GoogleMaps";
import ServiceList from "./components/SeviceList";
import { services } from "./components/Services";
// import Footer from "./components/Footer";

function App() {
  const [searchfield, setSearchfield] = useState(" ");

  // useEffect(() =>{
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);

  // },[])
  // };

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const buttonClick = () => {
    console.log(searchfield);
  };
  return (
    <div className="App">
      <Topnav />
      <Heropage onSearchChange={onSearchChange} buttonClick={buttonClick} />
      <Subsection />
      <ServiceList services={services} />
      <GoogleMaps />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
