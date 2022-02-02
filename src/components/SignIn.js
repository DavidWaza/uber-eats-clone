import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FiChevronRight } from "react-icons/fi";

function SignIn() {
  const [inputEmail, setInputEmail] = useState("");

  const navigate = useNavigate();

  const onInputEmail = (e) => {
    setInputEmail({ inputEmail: e.target.value });
  };
  // const buttonClick = () => {
  //   console.log(inputEmail);
  // };

  function onRouteChange() {
    if (inputEmail.inputEmail.length > 0) {
      navigate("/signincalls")
    }

  }
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
          <h5>What's your Email?</h5>
        </div>
        <div className="form-input">
          <form>
            <div className="input-form">
              <HiOutlineMail className="icon-message"></HiOutlineMail>
              <input
                type="text"
                placeholder="Enter your e-mail"
                onChange={(e) => onInputEmail(e)}
              />
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
        <button className="btn-food btn-sign" onClick={onRouteChange}>
          Next
          <FiChevronRight className="icon-right"></FiChevronRight>
        </button>
      </div>
    </div>
  );
}

export default SignIn;
