/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./loginstyle.css";
import { MdCancel } from "react-icons/md";
import Signup from "../signup/Signup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ onClose }) => {
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const openSignup = () => {
    setShowSignup(true); // Function to show Signup component
  };

  const closeSignup = () => {
    setShowSignup(false); // Function to close Signup component
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { email, password };

    axios
      .post("http://localhost:8001/auth/login", newUser)
      .then((res) => {
        alert(res.data.message);
        navigate("/");
        if (res.data.status === 200) {
          console.log('logedin');
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          alert(`Error: ${err.response.data.message}`);
        } else {
          alert(`Error: ${err.message}`);
        }
      });

    // Clear form fields after submission
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <section className="Main-login">
        <div className="container-fload">
          <div className="login">
            <form className="loginBox" onSubmit={handleSubmit}>
              <MdCancel className="cancel-Btn" onClick={onClose} />
              <h1>Login</h1>

              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div>
            <h4>Dont have an Account?</h4>
            <h4>Register Here!</h4>
            <button onClick={openSignup}>Signup</button>
          </div>
        </div>
      </section>
      {showSignup && <Signup onCloseSignup={closeSignup} />}
    </>
  );
};

export default Login;
