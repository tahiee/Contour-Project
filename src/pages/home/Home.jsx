/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./styleHome.css";
import { CiLocationArrow1 } from "react-icons/ci";
import h11 from "../../Images/h11.png";
import { FaPeopleGroup } from "react-icons/fa6";
import propertyIcon from "../../Images/property.png";
import About from "../about/About";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.scrollY);
    };
  
    window.addEventListener('scroll', onScroll);
  
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  
  useEffect(() => {
    if (scrollPosition !== 0) { // Only scroll if position is not zero
      window.scrollTo(0, scrollPosition);
    }
  }, [scrollPosition]);
  
  const [buyColor, setBuycolor] = useState(true);
  const [buyFontWe, setbuyFontWe] = useState(true);
  const [bgColor, setBgcolor] = useState(false);
  const [fontwe, setfontwe] = useState(false);

  const BoxClick = () => {
    setBgcolor(!bgColor);
    setfontwe(!fontwe);

    setBuycolor(false);
    setbuyFontWe(false);
  };

  const buyClick = () => {
    setBuycolor(!buyColor);
    setbuyFontWe(!buyFontWe);

    setBgcolor(false);
    setfontwe(false);
  };

  const [location, setLocation] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [locations] = useState([
    "Karachi",
    "Islamabad",
    "Lahore",
    "Rawalpindi",
  ]); // Example locations array

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocation(value);
  };

  // Function to handle location selection
  const handleLocationSelect = (selectedLocation) => {
    setShowDropdown(false);
    setLocation(selectedLocation);
  };

  // Filtered locations based on input value
  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(location.toLowerCase())
  );
  return (
    <>
      <Navbar/>
      <div className="home">
        <div className="div-15">
          <div className="div-16">
            <div className="column">
              <div className="div-17">
                <div className="div-18">Buy or Sell your property easily</div>
                <div className="div-19">
                  A great platform to buy, sell, your properties without any
                  commisions.
                </div>
                <div className="div-20">
                  <div className="div-21">
                    <div
                      className="div-22"
                      onClick={buyClick}
                      style={{
                        color: buyColor ? "#7065f0" : "black",
                        fontWeight: buyFontWe ? "700" : " normal",
                      }}
                    >
                      Buy
                    </div>
                    <div
                      className="div-23"
                      style={{
                        backgroundColor: buyColor ? "#7065f0" : "transparent",
                        height: "3px",
                      }}
                    />
                  </div>
                  <div className="div-24">
                    <div
                      className="div-25"
                      onClick={BoxClick}
                      style={{
                        color: bgColor ? "#7065f0" : "black",
                        fontWeight: fontwe ? "700" : " normal",
                      }}
                    >
                      Rent
                    </div>
                    <div
                      className="div-26"
                      style={{
                        backgroundColor: bgColor ? "#7065f0" : "transparent",
                        height: "3px",
                      }}
                    />
                  </div>
                </div>
                <div className="div-30">
                  <div className="div-31" style={{ cursor: "pointer" }}>
                    <div
                      className="div-33"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <input
                        type="search"
                        placeholder="Insert your location"
                        className="locationInput"
                        value={location}
                        onChange={handleInputChange}
                        onClick={() => setShowDropdown(true)} // Open dropdown on input click
                      />
                      <span style={{ marginLeft: "10px" }}>
                        <CiLocationArrow1 style={{ fontSize: "25px" }} />
                      </span>
                    </div>
                    {showDropdown && location.length > 0 && (
                      <div className="dropdown">
                        {filteredLocations.map((loc, index) => (
                          <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleLocationSelect(loc)}
                          >
                            {loc}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="div-39" />
                  <div className="div-401">
                    <button className="div-40">Browse Properties</button>
                  </div>
                </div>
                <div className="div-41">
                  <div className="div-42">
                    <div className="column-2">
                      <div className="div-43">
                        <div className="buyersGroup">
                          <FaPeopleGroup className="buyersGroupIcon" />
                        </div>

                        <div className="div-44">300+ Buyers</div>
                        <div className="div-45">believe in our service</div>
                      </div>
                    </div>
                    <div className="column-3">
                      <div className="div-46">
                        <div className="propertiers">
                          <img
                            loading="lazy"
                            src={propertyIcon}
                            className="img-6"
                          />
                        </div>
                        <div className="div-47">246+ properties</div>
                        <div className="div-48">
                          and house ready for occupancy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-4">
              <div className="div-49">
                <img loading="lazy" src={h11} className="img-7" />
                <div className="div-70">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f71259e07596aeead9ff9eb6b829de2137808108f041e05f791f379e5c030a8?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                    className="img-10"
                  />
                  <div className="div-71">
                    <div className="div-72">Excellent</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f354780028a605ad43299634e5bcf81b54e1280b3ced5251b285deb33c9b107d?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                      className="img-11"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6faed96acbd7d2ea6ac8a9c8ce3720356e9bbbba243fa70ce9ff9c674806b7b1?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                    className="img-12"
                  />
                  <div className="div-73">From 1,264 reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
