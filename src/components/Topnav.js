import React from "react";
// import App from './App'
import "./Topnav.css";
import { Link} from "react-router-dom";


function Topnav() {
  return (
    <div>
      <nav className="nav">
        <div className="logo ">
          <Link to="/">
            <h2>
             <span className="waza"> Waza</span> <span className="eats">Eats</span>
            </h2>
          </Link>
        </div>
        <Link to="/SignIn">
          <button className="top-nav-signup">Sign in</button>
        </Link>
      </nav>
    </div>
  );
}

export default Topnav;
