/* eslint-disable no-unused-vars */
import React from "react";
import "./buystyle.css";
import { Link } from "react-router-dom";
import hm1 from "../../Images/hm1.jpg";
import hm2 from "../../Images/hm2.jpg";
import hm3 from "../../Images/hm3.jpg";
import { MdVerified } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";
import { MdOutlineFilterAlt } from "react-icons/md";
import Navbar from "../../components/navbar/Navbar";

const Buy = () => {
  return (
    <>
      <Navbar/>
      <div className="buy-main">
        <div className="container">
          <div className="main-navigate">
            <nav className="navigate-nav">
              <ul>
                <li className="">
                  <Link to="/">Mohtabr</Link>
                </li>
                <li aria-hidden="true" className="">
                  <svg
                    className="arrow"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="NavigateNextIcon"
                  >
                    <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                  </svg>
                </li>
                <li className="">
                  <Link to="/buy">for Sell</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="buyer-heading-main">Based on your location</div>
          <div className="buyer-heading-child">
            Some of our picked properties near you location.
          </div>
          <div className="buyer-section-1">
            <div className="buyer-section-child-1">
              <div className="combine-section">
                <div className="buyers-section-1">
                  <div className="buyers-section-2">
                    <div className="seller-heading-div">
                      <MdAddHomeWork />

                      <p className="seller-head">All Residential</p>
                    </div>
                  </div>
                </div>
                <div className="seller-heading">
                  <div className="seller-heading-div">
                    <p className="seller-head">Price</p>
                  </div>
                </div>
                <div className="seller-heading">
                  <div className="seller-heading-div">
                    <p className="seller-head">Size</p>
                  </div>
                </div>
                <div className="seller-heading">
                  <div className="seller-heading-div">
                    <p className="seller-head">Bedrooms</p>
                  </div>
                </div>
                <div className="seller-heading">
                  <div className="seller-heading-div">
                    <MdVerified />
                    <p className="seller-head">Mohtabr Verified</p>
                  </div>
                </div>
                <div className="seller-heading">
                  <div className="seller-heading-div">
                    {/* <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/861d644e924654d9e0d54fdfd7260052583bcf43073a34a5c15eef775aa7862a?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                      className="renter-img-1"
                    /> */}
                    <MdOutlineFilterAlt />

                    <p className="seller-head">More Filter</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="buyer-section-child-2">
              <div className="buyer-section-child-2-1">
                <div className="buyer-section-child-2-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d59257a87d0000cee73bb9136a5b9cdae2ec07143049522212b9cdd453a64aa5?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                    className="search-img"
                  />
                  <div className="search-head">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="buyer-section-2">
            <div className="buyer-section-child">
              <div className="column-s-1">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/71caf582f6f16298bb205a9b3caf7d332068b50044fbf37f584f39d68de65564?apiKey=cc7f068e9f014680946a7e3092608e4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/71caf582f6f16298bb205a9b3caf7d332068b50044fbf37f584f39d68de65564?apiKey=cc7f068e9f014680946a7e3092608e4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/71caf582f6f16298bb205a9b3caf7d332068b50044fbf37f584f39d68de65564?apiKey=cc7f068e9f014680946a7e3092608e4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/71caf582f6f16298bb205a9b3caf7d332068b50044fbf37f584f39d68de65564?apiKey=cc7f068e9f014680946a7e3092608e4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/71caf582f6f16298bb205a9b3caf7d332068b50044fbf37f584f39d68de65564?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/71caf582f6f16298bb205a9b3caf7d332068b50044fbf37f584f39d68de65564?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/71caf582f6f16298bb205a9b3caf7d332068b50044fbf37f584f39d68de65564?apiKey=cc7f068e9f014680946a7e3092608e4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/71caf582f6f16298bb205a9b3caf7d332068b50044fbf37f584f39d68de65564?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                  className="column-s-img-1"
                />
              </div>
              <div className="column-s-2">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/73a6160ecfaeb81f148a44b660df07395038dbfb3ceb0af400681fd4c1e4c7ca?apiKey=cc7f068e9f014680946a7e3092608e4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/73a6160ecfaeb81f148a44b660df07395038dbfb3ceb0af400681fd4c1e4c7ca?apiKey=cc7f068e9f014680946a7e3092608e4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73a6160ecfaeb81f148a44b660df07395038dbfb3ceb0af400681fd4c1e4c7ca?apiKey=cc7f068e9f014680946a7e3092608e4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/73a6160ecfaeb81f148a44b660df07395038dbfb3ceb0af400681fd4c1e4c7ca?apiKey=cc7f068e9f014680946a7e3092608e4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/73a6160ecfaeb81f148a44b660df07395038dbfb3ceb0af400681fd4c1e4c7ca?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73a6160ecfaeb81f148a44b660df07395038dbfb3ceb0af400681fd4c1e4c7ca?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/73a6160ecfaeb81f148a44b660df07395038dbfb3ceb0af400681fd4c1e4c7ca?apiKey=cc7f068e9f014680946a7e3092608e4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/73a6160ecfaeb81f148a44b660df07395038dbfb3ceb0af400681fd4c1e4c7ca?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                  className="column-s-img-2"
                />
              </div>
              <div className="column-s-3">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe7659da1d92b8a8658e6d91732dbcc8bc9ec634039ac1502783ae57df72bc8c?apiKey=cc7f068e9f014680946a7e3092608e4d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7659da1d92b8a8658e6d91732dbcc8bc9ec634039ac1502783ae57df72bc8c?apiKey=cc7f068e9f014680946a7e3092608e4d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7659da1d92b8a8658e6d91732dbcc8bc9ec634039ac1502783ae57df72bc8c?apiKey=cc7f068e9f014680946a7e3092608e4d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7659da1d92b8a8658e6d91732dbcc8bc9ec634039ac1502783ae57df72bc8c?apiKey=cc7f068e9f014680946a7e3092608e4d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7659da1d92b8a8658e6d91732dbcc8bc9ec634039ac1502783ae57df72bc8c?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7659da1d92b8a8658e6d91732dbcc8bc9ec634039ac1502783ae57df72bc8c?apiKey=cc7f068e9f014680946a7e3092608e4d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7659da1d92b8a8658e6d91732dbcc8bc9ec634039ac1502783ae57df72bc8c?apiKey=cc7f068e9f014680946a7e3092608e4d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe7659da1d92b8a8658e6d91732dbcc8bc9ec634039ac1502783ae57df72bc8c?apiKey=cc7f068e9f014680946a7e3092608e4d&"
                  className="column-s-img-3"
                />
              </div>
            </div>
          </div> */}
          <div className="buyer-section-3">
            <div className="buyer-sec-child">
              <div className="column-same-forall">
                <div className="b-s-c">
                  <div className="b-s-c-2">
                    <img loading="lazy" src={hm1} className="b-s-c-2-img" />
                    <div className="main-b-s-2-details">
                      <div className="price-main">
                        <div className="price-child">
                          <div className="price">Rs 52</div>
                          <div className="target-price-word">/Lac</div>
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
                    <img loading="lazy" src={hm1} className="b-s-c-2-img" />
                    <div className="main-b-s-2-details">
                      <div className="price-main">
                        <div className="price-child">
                          <div className="price">Rs 60</div>
                          <div className="target-price-word">/Lac</div>
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
                    <img loading="lazy" src={hm1} className="b-s-c-2-img" />
                    <div className="main-b-s-2-details">
                      <div className="price-main">
                        <div className="price-child">
                          <div className="price">Rs 20</div>
                          <div className="target-price-word">/Lac</div>
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
                    <img loading="lazy" src={hm3} className="b-s-c-2-img" />
                    <div className="main-b-s-2-details">
                      <div className="price-main">
                        <div className="price-child">
                          <div className="price">Rs 14</div>
                          <div className="target-price-word">/Lac</div>
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
                    <img loading="lazy" src={hm1} className="b-s-c-2-img" />
                    <div className="main-b-s-2-details">
                      <div className="price-main">
                        <div className="price-child">
                          <div className="price">Rs 45</div>
                          <div className="target-price-word">/Lac</div>
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
                    <img loading="lazy" src={hm1} className="b-s-c-2-img" />
                    <div className="main-b-s-2-details">
                      <div className="price-main">
                        <div className="price-child">
                          <div className="price">Rs 50</div>
                          <div className="target-price-word">/Lac</div>
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
          {/* <div className="buyer-section-3">
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
          </div> */}
          <div className="property-btn">Veiw More</div>
        </div>
      </div>
    </>
  );
};

export default Buy;
