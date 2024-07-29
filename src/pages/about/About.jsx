/* eslint-disable no-unused-vars */
import React from "react";
import "./aboutstyle.css";
import { Link } from "react-router-dom";
// import Buy from "../buy/Buy";
import h2 from "../../Images/h2.jpg";
import less from "../../list-images/lessc2.png";
import bestPrice from "../../list-images/bestPrice.png";
import control from "../../list-images/control.png";
import FeaturedPro from "../featured/FeaturedPro";
const About = () => {
  const scrollBehavor = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="about-Main" style={{ marginBottom: "-80px" }}>
        <div className="about-Section">
          <div className="about-section2">
            <div className="left-column">
              <div className="left-column-child">
                <img
                  loading="lazy"
                  src={h2}
                  // src="https://cdn.builder.io/api/v1/image/assets/TEMP/6207e495d4ef222a8993751d17db19e8f4e7e4ba21bac66677f5efac7c0e37fb?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                  className="about-img"
                />
                <div className="childHeading1">
                  The new way to find your new home
                </div>
                <div className="childHeading2">
                  Find your dream place to live in with more than 1k+ properties
                  listed.
                </div>
                <div className="childHeading3">
                  <Link to="/buy" className="browse" onClick={scrollBehavor}>
                    Browse Properties
                  </Link>
                </div>
              </div>
            </div>
            <div className="column-right">
              <div className="column-right-child">
                <div className="child-1">
                  <div className="child-1-2">
                    <div className="child-1-2-1">
                      <div className="child-1-2-2">
                        <img
                          loading="lazy"
                          src={bestPrice}
                          // src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8900f6c04a6d69378363afddaa7e9638aff511288b22341c31e5cde3285e535?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                          className="child-1-2-2-img"
                        />
                        <div className="child-1-2-3">Best Price</div>
                        <div className="child-1-2-4">
                          With our C2C platform, you can rest assured that
                          you'll get the most competitive rates directly from
                          other users. Let us handle the details so you get the
                          best deal without any hassle.
                        </div>
                      </div>
                    </div>
                    <div className="child-2-2">
                      <div className="child-2-3">
                        <img
                          loading="lazy"
                          src={less}
                          // src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cead78e13f534558cc662fb2951010ff40b3aabb96bc453228f3cd402240787?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                          className="child-2-4-img"
                        />
                        <div className="child-2-5">Lowest Commission</div>
                        <div className="child-2-6">
                          You no longer have to negotiate commissions and haggle
                          with other agents it only cost 2%!
                        </div>
                      </div>
                    </div>
                    {/* <div className="child-1-3">
                      <div className="child-1-4">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf608693573d4d4b606ff29a44fbdc136f72fcc0b0dd57d262f998aa6f70121b?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                          className="child-1-4-img"
                        />
                        <div className="child-1-5">Property Insurance</div>
                        <div className="child-1-6">
                          We offer our customer property protection of liability
                          coverage and insurance for their better life.
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="child-2">
                  <div className="child-2-1">
                    <div className="child-2-7">
                      <div className="child-2-8">
                        <img
                          loading="lazy"
                          src={control}
                          // src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ec50d3661611175f6915aebbf881fb104e036d8e8b653ffda1b5ed24a98b232?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                          className="child-2-9-img"
                        />
                        <div className="child-2-10">Overall Control</div>
                        <div className="child-2-11">
                          Get a virtual tour, and schedule visits before you buy
                          any properties. You get overall control.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedPro />
    </>
  );
};

export default About;
