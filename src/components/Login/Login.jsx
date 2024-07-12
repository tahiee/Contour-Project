/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./loginstyle.css";
import { MdCancel } from "react-icons/md";
import Signup from "../signup/Signup";
import axios from "axios";

const Login = ({ onClose }) => {
  const [showSignup, setShowSignup] = useState(false); // State to control Signup component visibility

  const openSignup = () => {
    setShowSignup(true); // Function to show Signup component
  };

  const closeSignup = () => {
    setShowSignup(false); // Function to close Signup component
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { username, email, password };

    axios
      .post("", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // Clear form fields after submission
    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <section className="Main-login">
        <div className="container-fload">
          <div className="login">
            <div>
              <button className="cancel-Btn">
                <MdCancel onClick={onClose} />
              </button>
            </div>
            <div className="">
              <h1>Login</h1>
              <form className="loginBox" onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Submit</button>
            </form>
            </div>
            <div>
              <h4>Dont have an Account?</h4>
              <h4>Register Here!</h4>
              <button onClick={openSignup}>Signup</button>{" "}
              {/* Updated to trigger openSignup function */}
            </div>
          </div>
        </div>
      </section>
      {showSignup && <Signup onCloseSignup={closeSignup} />}
    </>
  );
};

export default Login;
