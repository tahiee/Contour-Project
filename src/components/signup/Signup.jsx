/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./stylesignup.css";
import { MdCancel } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Signup = ({ onCloseSignup }) => {
  return (
    <>
      <section className="Main-signup">
        <div className="container-fload">
          <div className="signup">
            <div>
              <button className="cancel-Btn-signup" onClick={onCloseSignup}>
                <MdCancel />
              </button>
            </div>
            <div>
              <h1>SignUp</h1>
              <div className="signupBox" >
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="+92 300000 0" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Passcode" />
                <input type="password" placeholder="Re-Check Password" />
              </div>
              <button>Singup</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
