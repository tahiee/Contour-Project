/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styleNav.css";
import logo from "../../Images/logo2.png";
import Login from "../Login/Login";
import Signup from "../signup/Signup";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [signupPopup, setSignupPopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      <div id="theNavbar" className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="div-2">
          <Link to="/">
            <img loading="lazy" src={logo} className="img" />
          </Link>
          <div className="div-3">
            {/* <div className="div-4">Rent</div> */}
            <div className="div-5">
              <Link onClick={scrollToTop} to="/buy">Buy</Link>
            </div>
            <div className="div-6">
              <Link to="/seller">Post Property</Link>
            </div>
            <div className="div-7">
              <div className="div-8 dropDown">
                <Link className="dropdownBtn">Manage Property</Link>
                <div className="dropDwon-Content" style={{ left: "0px" }}>
                  <Link>Property Updates</Link>
                  <Link>Media</Link>
                  <Link>Blogs</Link>
                  <Link>Reviews</Link>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/976d0c2edec8546e584145c3e228e737d6ddf8282fad544dc349a2b0f33abd17?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                className="img-2"
              />
            </div>
            <div className="div-9">
              <div className="div-10">
                <Link>Resources</Link>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/31aca3c9bdda1245b0a9e9d9fe1ca0d4356f79242d476a6c7c778b1ff4468c6c?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                className="img-3"
              />
            </div>
          </div>
        </div>
        <div className="div-11">
          <div className="div-12" onClick={() => setLoginPopup(true)}>
            
            Login
            
          </div>
          <div className="div-13" onClick={() => setSignupPopup(true)}>
            Sign up
          </div>
        </div>
      </div>
      {loginPopup && <Login onClose={() => setLoginPopup(false)} />}
      {signupPopup && <Signup onCloseSignup={() => setSignupPopup(false)} />}
    </>
  );
};

export default Navbar;
