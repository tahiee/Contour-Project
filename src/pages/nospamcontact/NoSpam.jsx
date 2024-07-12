/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";

const NoSpam = () => {
  return (
    <>
      <div className="nospam-main">
        <div className="nospam-header">
          <div className="nospam-section">
            <div className="title">No Spam Promise</div>
            <div className="subtitle">Are you a landlord?</div>
            <div className="description">
              Discover ways to increase your home's value and get listed. No
              Spam.
            </div>
            <div className="form">
              <div className="form-label">
                <input
                  type="email"
                  className="email-input"
                  placeholder="Enter your email address"
                />
              </div>
              <div >
                <button className="submit-button">Submit</button>
              </div>
            </div>
            <div className="community">
              Join <span style={{ color: "rgba(112,101,240,1)" }}>1000+</span>{" "}
              other landlords in our community.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoSpam;
