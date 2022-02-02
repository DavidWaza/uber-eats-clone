import React from "react";
// import App from './App'
import "./Topnav.css";
import { Link} from "react-router-dom";

const styles ={
  marginTop:4
}
function Topnav() {
  return (
    <div>
      <nav className="nav">
        <div className="logo ">
          <Link to="/">
            <h2 style={styles}>
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
