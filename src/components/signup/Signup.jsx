/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./stylesignup.css";
import { MdCancel } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Signup = ({ onCloseSignup }) => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    // Basic input validation
    if (!username || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8001/auth/signup",
        formData
      );
      console.log(res.data);
      alert("User Created Successfully");
      Navigate("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(`Error submitting form: ${error.response.data.message}`);
      } else {
        alert(`Error submitting form: ${error.message}`);
      }
    }
  };
  return (
    <>
      <section className="Main-signup">
        <div className="container-fload">
          <div className="signup">
            <form className="signupBox" onSubmit={handleSubmit}>
              <MdCancel className="cancel-Btn-signup" onClick={onCloseSignup} />
              <h1>SignUp</h1>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Passcode"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button>Singup</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
