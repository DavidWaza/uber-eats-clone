import React from "react";
import "./App.css";
import Heropage from "./components/Heropage";
import Subsection from "./components/Subsection";
import { useState } from "react";
import Topnav from "./components/Topnav";
import GoogleMaps from "./components/GoogleMaps";
import ServiceList from "./components/SeviceList";
import { services } from "./components/Services";


function App() {
  const [searchfield, setSearchfield] = useState(" ");

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
      {/* <Socials /> */}
      <ServiceList services={services} />
      <GoogleMaps />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
