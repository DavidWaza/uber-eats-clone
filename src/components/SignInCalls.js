import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { HiOutlinePhone } from "react-icons/hi";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

function SignInCalls() {
  return (
    <div>
      <nav className="nav nav-sign">
        <div className="logo">
          <Link to="/">
            <h2>
              Waza <span className="eats">Eats</span>
            </h2>
          </Link>
        </div>
      </nav>
      <div className="form-wrapper">
        <div className="form-text">
          <h5>What's your Number?</h5>
        </div>
        <div className="form-input">
          <form>
            <div className="input-form">
              <HiOutlinePhone className="icon-message"></HiOutlinePhone>
              <input type="number" placeholder="Enter your number" />
            </div>
          </form>
        </div>
        <div className="form-subtext">
          <p>
            By continuing, you may recieve an email verification.
            <br /> Message and Data Rates may apply.
          </p>
        </div>
      </div>
      <div className="btn-wrapper">
        <button className="btn-food btn-sign">
          Next
          <FiChevronRight className="icon-right"></FiChevronRight>
        </button>

        <Link to="/signin">
          <button className="btn-food btn-sign">
            <FiChevronLeft className="icon-left"></FiChevronLeft>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignInCalls;
