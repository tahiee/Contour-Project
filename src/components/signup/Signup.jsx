/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./stylesignup.css";
import { MdCancel } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Signup = ({ onCloseSignup }) => {
  const [formData, setFormData] = useState({});

  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  console.log(formData);
  
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      console.log("handelSubmit Clicked");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      // Handle error: show user a message, retry logic, etc.
    }
  };
  return (
    <>
      <section className="Main-signup">
        <div className="container-fload">
          <div className="signup">
            <div>
              <MdCancel className="cancel-Btn-signup" onClick={onCloseSignup} />
              <h1>SignUp</h1>
              <form className="signupBox" onSubmit={handelSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  id="Username"
                  onChange={handelChange}
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  onChange={handelChange}
                />
                <input
                  type="password"
                  placeholder="Passcode"
                  id="password"
                  onChange={handelChange}
                />
                <button>Singup</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
