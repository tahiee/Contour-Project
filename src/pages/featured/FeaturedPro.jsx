/* eslint-disable no-unused-vars */
import React from "react";
import "./featurestyle.css";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import NoSpam from "../nospamcontact/NoSpam";


const FeaturedPro = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (

    <>
      <div className="buy-main" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="buyer-heading-main">Featured Properties</div>
          <div className="buyer-heading-child">
            These are our featured properties
          </div>
          <div className="buyer-section-3">
            <div className="buyer-sec-child">
              <div className="column-same-forall">
                <div className="b-s-c">
                  <div className="b-s-c-2">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                      className="b-s-c-2-img"
                    />
                    <div className="main-b-s-2-details">
                      <div className="price-main">
                        <div className="price-child">
                          <div className="price">Rs 35</div>
                          <div className="month">/Lac</div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/66633daf050138476ec4b3afbc180b580106796be13af22c885c870b2d324be3?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                          className="price-main-img"
                        />
                      </div>
                      <div className="property-name">St. Crystal</div>
                      <div className="property-address">
                        210 US Highway, Highland Lake, FL
                      </div>
                      <div className="theline" />
                      <div className="details-section">
                        <div className="main-bed-div">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a135b25fd48eb6c857473e8a8645819b89df9614816d05b1e12a6bb825f9bfc8?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-bed-img"
                          />
                          <div className="bed-head">4 Beds</div>
                        </div>
                        <div className="main-bath">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98983c682993ebdcbd44f615a17934d1faeb9e8af304c7c8c6d3f4c2c5f5158d?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-bath-img"
                          />
                          <div className="bath-head">2 Bathrooms</div>
                        </div>
                        <div className="main-space">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1dad8a5128e4cc8b8dc0b6f17800398fda60b104bce8e0d62b580ce8f65fc81?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-space-img"
                          />
                          <div className="space-mng">6x8 m²</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-same-forall">
                <div className="b-s-c">
                  <div className="b-s-c-2">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                      className="b-s-c-2-img"
                    />
                    <div className="main-b-s-2-details">
                      <div className="price-main">
                        <div className="price-child">
                          <div className="price">Rs 24</div>
                          <div className="month">/Lac</div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/66633daf050138476ec4b3afbc180b580106796be13af22c885c870b2d324be3?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                          className="price-main-img"
                        />
                      </div>
                      <div className="property-name">St. Crystal</div>
                      <div className="property-address">
                        210 US Highway, Highland Lake, FL
                      </div>
                      <div className="theline" />
                      <div className="details-section">
                        <div className="main-bed-div">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a135b25fd48eb6c857473e8a8645819b89df9614816d05b1e12a6bb825f9bfc8?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-bed-img"
                          />
                          <div className="bed-head">4 Beds</div>
                        </div>
                        <div className="main-bath">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98983c682993ebdcbd44f615a17934d1faeb9e8af304c7c8c6d3f4c2c5f5158d?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-bath-img"
                          />
                          <div className="bath-head">2 Bathrooms</div>
                        </div>
                        <div className="main-space">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1dad8a5128e4cc8b8dc0b6f17800398fda60b104bce8e0d62b580ce8f65fc81?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-space-img"
                          />
                          <div className="space-mng">6x8 m²</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-same-forall">
                <div className="b-s-c">
                  <div className="b-s-c-2">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                      className="b-s-c-2-img"
                    />
                    <div className="main-b-s-2-details">
                      <div className="price-main">
                        <div className="price-child">
                          <div className="price">$2,400</div>
                          <div className="month">/month</div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/66633daf050138476ec4b3afbc180b580106796be13af22c885c870b2d324be3?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                          className="price-main-img"
                        />
                      </div>
                      <div className="property-name">St. Crystal</div>
                      <div className="property-address">
                        210 US Highway, Highland Lake, FL
                      </div>
                      <div className="theline" />
                      <div className="details-section">
                        <div className="main-bed-div">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a135b25fd48eb6c857473e8a8645819b89df9614816d05b1e12a6bb825f9bfc8?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-bed-img"
                          />
                          <div className="bed-head">4 Beds</div>
                        </div>
                        <div className="main-bath">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98983c682993ebdcbd44f615a17934d1faeb9e8af304c7c8c6d3f4c2c5f5158d?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-bath-img"
                          />
                          <div className="bath-head">2 Bathrooms</div>
                        </div>
                        <div className="main-space">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1dad8a5128e4cc8b8dc0b6f17800398fda60b104bce8e0d62b580ce8f65fc81?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-space-img"
                          />
                          <div className="space-mng">6x8 m²</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buyer-section-3">
            <div className="buyer-sec-child">
              <div className="column-same-forall">
                <div className="b-s-c">
                  <div className="b-s-c-2">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                      className="b-s-c-2-img"
                    />
                    <div className="main-b-s-2-details">
                      <div className="price-main">
                        <div className="price-child">
                          <div className="price">$2,400</div>
                          <div className="month">/month</div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/66633daf050138476ec4b3afbc180b580106796be13af22c885c870b2d324be3?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                          className="price-main-img"
                        />
                      </div>
                      <div className="property-name">St. Crystal</div>
                      <div className="property-address">
                        210 US Highway, Highland Lake, FL
                      </div>
                      <div className="theline" />
                      <div className="details-section">
                        <div className="main-bed-div">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a135b25fd48eb6c857473e8a8645819b89df9614816d05b1e12a6bb825f9bfc8?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-bed-img"
                          />
                          <div className="bed-head">4 Beds</div>
                        </div>
                        <div className="main-bath">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98983c682993ebdcbd44f615a17934d1faeb9e8af304c7c8c6d3f4c2c5f5158d?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-bath-img"
                          />
                          <div className="bath-head">2 Bathrooms</div>
                        </div>
                        <div className="main-space">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1dad8a5128e4cc8b8dc0b6f17800398fda60b104bce8e0d62b580ce8f65fc81?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-space-img"
                          />
                          <div className="space-mng">6x8 m²</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-same-forall">
                <div className="b-s-c">
                  <div className="b-s-c-2">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                      className="b-s-c-2-img"
                    />
                    <div className="main-b-s-2-details">
                      <div className="price-main">
                        <div className="price-child">
                          <div className="price">$2,400</div>
                          <div className="month">/month</div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/66633daf050138476ec4b3afbc180b580106796be13af22c885c870b2d324be3?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                          className="price-main-img"
                        />
                      </div>
                      <div className="property-name">St. Crystal</div>
                      <div className="property-address">
                        210 US Highway, Highland Lake, FL
                      </div>
                      <div className="theline" />
                      <div className="details-section">
                        <div className="main-bed-div">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a135b25fd48eb6c857473e8a8645819b89df9614816d05b1e12a6bb825f9bfc8?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-bed-img"
                          />
                          <div className="bed-head">4 Beds</div>
                        </div>
                        <div className="main-bath">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98983c682993ebdcbd44f615a17934d1faeb9e8af304c7c8c6d3f4c2c5f5158d?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-bath-img"
                          />
                          <div className="bath-head">2 Bathrooms</div>
                        </div>
                        <div className="main-space">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1dad8a5128e4cc8b8dc0b6f17800398fda60b104bce8e0d62b580ce8f65fc81?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-space-img"
                          />
                          <div className="space-mng">6x8 m²</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-same-forall">
                <div className="b-s-c">
                  <div className="b-s-c-2">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/329f834e0ea231e6830cbc6b0c261e1e821e88e7dae6c8767a013845dd9bb190?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                      className="b-s-c-2-img"
                    />
                    <div className="main-b-s-2-details">
                      <div className="price-main">
                        <div className="price-child">
                          <div className="price">$2,400</div>
                          <div className="month">/month</div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/66633daf050138476ec4b3afbc180b580106796be13af22c885c870b2d324be3?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                          className="price-main-img"
                        />
                      </div>
                      <div className="property-name">St. Crystal</div>
                      <div className="property-address">
                        210 US Highway, Highland Lake, FL
                      </div>
                      <div className="theline" />
                      <div className="details-section">
                        <div className="main-bed-div">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a135b25fd48eb6c857473e8a8645819b89df9614816d05b1e12a6bb825f9bfc8?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-bed-img"
                          />
                          <div className="bed-head">4 Beds</div>
                        </div>
                        <div className="main-bath">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98983c682993ebdcbd44f615a17934d1faeb9e8af304c7c8c6d3f4c2c5f5158d?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-bath-img"
                          />
                          <div className="bath-head">2 Bathrooms</div>
                        </div>
                        <div className="main-space">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1dad8a5128e4cc8b8dc0b6f17800398fda60b104bce8e0d62b580ce8f65fc81?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                            className="main-space-img"
                          />
                          <div className="space-mng">6x8 m²</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="property-btn">
            <Link className="browes-buy" onClick={scrollToTop} to="/buy">Browse more properties</Link>
          </div>
        </div>
      </div>
      <NoSpam/>
    </>
  );
};

export default FeaturedPro;
