/* eslint-disable no-unused-vars */
import React from "react";
import "./styleSeller.css";
// import sellicon from "../../list-images/sell-icon.svg";
import sellicon from "../../list-images/sell1.png";
// import renticon from "../../list-images/rent-icon.svg";
import renticon from "../../list-images/rent1.png";
import searchicon from "../../list-images/search.svg";
const Seller = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="MuiBox-root mui-style-dqjqmd">
          <div className="MuiBox-root mui-style-k008qs">
            <div className="MuiBox-root mui-style-17ypt0z">
              <div className="MuiBox-root mui-style-1wf050p">
                <h1></h1>
                <h2>Get the best value for your property in a few steps.</h2>
              </div>
            </div>
            <div className="MuiBox-root mui-style-1h799um"></div>
          </div>
          <div className="MuiGrid2-root MuiGrid2-container MuiGrid2-direction-xs-row MuiGrid2-spacing-xs-2 mui-style-f5shgq">
            <div className="MuiGrid2-root MuiGrid2-direction-xs-row MuiGrid2-grid-xs-12 MuiGrid2-grid-md-7 MuiGrid2-grid-lg-8 mui-style-yfnoxk">
              <div className="MuiBox-root mui-style-113hzdz">
                <div className="MuiBox-root mui-style-0">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h5 className="MuiTypography-root MuiTypography-h5 mui-style-1udghyp">
                      What do you want to do?
                    </h5>
                    <div className="MuiBox-root mui-style-a0jm0i">
                      <div className="MuiBox-root mui-style-c6gxxn">
                        <div className="MuiBox-root mui-style-1tq5059">
                          <img src={sellicon} alt="" className="sellIcon"/>
                        </div>
                        <div>Sell</div>
                      </div>
                      <div className="MuiBox-root mui-style-1hdbq1s">
                        <div className="MuiBox-root mui-style-1tq5059">
                          <img src={renticon} alt="" className="rentIcon"/>
                        </div>
                        <div>Rent</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="MuiBox-root mui-style-0">
                  <div className="MuiBox-root mui-style-1qv3e76">
                    <h5 className="MuiTypography-root MuiTypography-h5 mui-style-14z1ixs">
                      What kind of property do you have?
                    </h5>
                    <div className="MuiBox-root mui-style-g35yj1">
                      <div className="MuiTabs-root mui-style-wrrr8">
                        <div
                          className="MuiTabs-scroller MuiTabs-fixed mui-style-1anid1y"
                          // style="overflow: hidden; margin-bottom: 0"
                        >
                          <div
                            aria-label="secondary tabs example"
                            className="MuiTabs-flexContainer mui-style-k008qs"
                            role="tablist"
                          >
                            <button
                              className="MuiButtonBase-root MuiTab-root MuiTab-textColorSecondary Mui-selected mui-style-vo087r"
                              type="button"
                            >
                              Residential
                              <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                            </button>
                            <button
                              className="MuiButtonBase-root MuiTab-root MuiTab-textColorSecondary mui-style-1cvj5a9"
                              tabIndex="-1"
                              type="button"
                              aria-selected="false"
                            >
                              Plot
                              <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                            </button>
                            <button
                              className="MuiButtonBase-root MuiTab-root MuiTab-textColorSecondary mui-style-1cvj5a9"
                              tabIndex="-1"
                              type="button"
                              role="tab" 
                              aria-selected="false"
                            >
                              Commercial
                              <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                            </button>
                          </div>
                          <span
                            className="MuiTabs-indicator mui-style-j0mdi4"
                            style={{ left: "0px", width: "139.562px" }}
                          ></span>
                        </div>
                      </div>
                      <div className="MuiBox-root mui-style-m9aht4">
                        <div className="MuiBox-root mui-style-4eu7qi">
                          <div className="MuiBox-root mui-style-trhokm">
                            <img src="" alt="" />
                          </div>
                          <span className="MuiTypography-root MuiTypography-body2New mui-style-l0akl0">
                            House
                          </span>
                        </div>
                        <div className="MuiBox-root mui-style-1qprki3">
                          <div className="MuiBox-root mui-style-trhokm">
                            <img src="" alt="" />
                          </div>
                          <span className="MuiTypography-root MuiTypography-body2New mui-style-l0akl0">
                            Flat
                          </span>
                        </div>
                        <div className="MuiBox-root mui-style-1qprki3">
                          <div className="MuiBox-root mui-style-trhokm">
                            <img src="" alt="" />
                          </div>
                          <span className="MuiTypography-root MuiTypography-body2New mui-style-l0akl0">
                            Lower Portion
                          </span>
                        </div>
                        <div className="MuiBox-root mui-style-1qprki3">
                          <div className="MuiBox-root mui-style-trhokm">
                            <img src="" alt="" />
                          </div>
                          <span className="MuiTypography-root MuiTypography-body2New mui-style-l0akl0">
                            Upper Portion
                          </span>
                        </div>
                        <div className="MuiBox-root mui-style-1qprki3">
                          <div className="MuiBox-root mui-style-trhokm">
                            <img src="" alt="" />
                          </div>
                          <span className="MuiTypography-root MuiTypography-body2New mui-style-l0akl0">
                            Room
                          </span>
                        </div>
                        <div className="MuiBox-root mui-style-1qprki3">
                          <div className="MuiBox-root mui-style-trhokm">
                            <img src="" alt="" />
                          </div>
                          <span className="MuiTypography-root MuiTypography-body2New mui-style-l0akl0">
                            Farm House
                          </span>
                        </div>
                        <div className="MuiBox-root mui-style-1qprki3">
                          <div className="MuiBox-root mui-style-trhokm">
                            <img src="" alt="" />
                          </div>
                          <span className="MuiTypography-root MuiTypography-body2New mui-style-l0akl0">
                            Guest House
                          </span>
                        </div>
                        <div className="MuiBox-root mui-style-1qprki3">
                          <div className="MuiBox-root mui-style-trhokm">
                            <img src="" alt="" />
                          </div>
                          <span className="MuiTypography-root MuiTypography-body2New mui-style-l0akl0">
                            Pent House
                          </span>
                        </div>
                        <div className="MuiBox-root mui-style-1qprki3">
                          <div className="MuiBox-root mui-style-trhokm">
                            <img src="" alt="" />
                          </div>
                          <span className="MuiTypography-root MuiTypography-body2New mui-style-l0akl0">
                            Annexe
                          </span>
                        </div>
                        <div className="MuiBox-root mui-style-1qprki3">
                          <div className="MuiBox-root mui-style-trhokm">
                            <img src="" alt="" />
                          </div>
                          <span className="MuiTypography-root MuiTypography-body2New mui-style-l0akl0">
                            Hostel
                          </span>
                        </div>
                        <div className="MuiBox-root mui-style-1qprki3">
                          <div className="MuiBox-root mui-style-trhokm">
                            <img src="" alt="" />
                          </div>
                          <span className="MuiTypography-root MuiTypography-body2New mui-style-l0akl0">
                            Hotel Suites
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="MuiBox-root mui-style-1u9mrov">
                  <div className="MuiBox-root mui-style-0">
                    <div className="MuiBox-root mui-style-1jke4yk">
                      <div
                        style={{ position: "absolute", top: "-100px" }}
                      ></div>
                      <div className="MuiBox-root mui-style-1qdyvok">
                        <h5 className="MuiTypography-root MuiTypography-h5 mui-style-14z1ixs">
                          Which city is your property in?
                        </h5>
                      </div>
                      <div className="MuiAutocomplete-root MuiAutocomplete-hasPopupIcon mui-style-1wq0w0">
                        <div className="MuiFormControl-root MuiFormControl-fullWidth mui-style-tzsjye">
                          <div className="MuiFormControl-root MuiTextField-root mui-style-pnifa1">
                            <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeNormal MuiInputBase-adornedStart MuiInputBase-adornedEnd MuiAutocomplete-inputRoot mui-style-v84rhw">
                              <div className="MuiInputAdornment-root MuiInputAdornment-positionStart MuiInputAdornment-outlined MuiInputAdornment-sizeNormal mui-style-1a6giau">
                                <div className="MuiBox-root mui-style-1bxrx34">
                                  <img src={searchicon} alt="" />
                                </div>
                              </div>
                              <input
                                autoComplete="off"
                                id=":R1qc7cqnd6:"
                                placeholder="Select your city"
                                type="text"
                                className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused mui-style-1gnht4k"
                                aria-autocomplete="list"
                                aria-expanded="false"
                                autoCapitalize="none"
                                spellCheck="false"
                                role="combobox"
                                value=""
                              />
                              <div className="MuiAutocomplete-endAdornment mui-style-mxlkbn">
                                <button
                                  className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-popupIndicator mui-style-uge3vf"
                                  tabIndex="-1"
                                  type="button"
                                  aria-label="Open"
                                  title="Open"
                                >
                                  <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                                </button>
                              </div>
                              <fieldset
                                aria-hidden="true"
                                className="MuiOutlinedInput-notchedOutline mui-style-igs3ac"
                              >
                                <legend className="mui-style-ihdtdm"></legend>
                              </fieldset>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="MuiBox-root mui-style-0">
                  <div className="MuiBox-root mui-style-1459qtg">
                    <div style={{ position: "absolute", top: "-100px" }}></div>
                    <h5 className="MuiTypography-root MuiTypography-h5 mui-style-1udghyp">
                      How many bedrooms does it have?
                    </h5>
                    <div className="MuiBox-root mui-style-1hpngk0">
                      <div className="MuiBox-root mui-style-w4tyjy">
                        <div
                          className="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault mui-style-iwanb3"
                          tabIndex="0"
                          role="button"
                        >
                          <span className="MuiChip-label MuiChip-labelMedium mui-style-9iedg7">
                            Studio
                          </span>
                          <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                        </div>
                        <div
                          className="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault mui-style-iwanb3"
                          tabIndex="0"
                          role="button"
                        >
                          <span className="MuiChip-label MuiChip-labelMedium mui-style-9iedg7">
                            1
                          </span>
                          <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                        </div>
                        <div
                          className="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault mui-style-iwanb3"
                          tabIndex="0"
                          role="button"
                        >
                          <span className="MuiChip-label MuiChip-labelMedium mui-style-9iedg7">
                            2
                          </span>
                          <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                        </div>
                        <div
                          className="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault mui-style-iwanb3"
                          tabIndex="0"
                          role="button"
                        >
                          <span className="MuiChip-label MuiChip-labelMedium mui-style-9iedg7">
                            3
                          </span>
                          <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                        </div>
                        <div
                          className="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault mui-style-iwanb3"
                          tabIndex="0"
                          role="button"
                        >
                          <span className="MuiChip-label MuiChip-labelMedium mui-style-9iedg7">
                            4
                          </span>
                          <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                        </div>
                        <div
                          className="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault mui-style-iwanb3"
                          tabIndex="0"
                          role="button"
                        >
                          <span className="MuiChip-label MuiChip-labelMedium mui-style-9iedg7">
                            5
                          </span>
                          <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                        </div>
                        <div
                          className="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault mui-style-iwanb3"
                          tabIndex="0"
                          role="button"
                        >
                          <span className="MuiChip-label MuiChip-labelMedium mui-style-9iedg7">
                            6
                          </span>
                          <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                        </div>
                        <div
                          className="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault mui-style-iwanb3"
                          tabIndex="0"
                          role="button"
                        >
                          <span className="MuiChip-label MuiChip-labelMedium mui-style-9iedg7">
                            7
                          </span>
                          <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                        </div>
                        <div
                          className="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault mui-style-iwanb3"
                          tabIndex="0"
                          role="button"
                        >
                          <span className="MuiChip-label MuiChip-labelMedium mui-style-9iedg7">
                            8
                          </span>
                          <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                        </div>
                        <div
                          className="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault mui-style-iwanb3"
                          tabIndex="0"
                          role="button"
                        >
                          <span className="MuiChip-label MuiChip-labelMedium mui-style-9iedg7">
                            9
                          </span>
                          <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                        </div>
                        <div
                          className="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-clickable MuiChip-clickableColorDefault MuiChip-filledDefault mui-style-iwanb3"
                          tabIndex="0"
                          role="button"
                        >
                          <span className="MuiChip-label MuiChip-labelMedium mui-style-9iedg7">
                            10+
                          </span>
                          <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="MuiBox-root mui-style-1u9mrov">
                  <div className="MuiBox-root mui-style-79elbk">
                    <div style={{ position: "absolute", top: "-100px" }}></div>
                    <div className="MuiBox-root mui-style-69i1ev">
                      <h5 className="MuiTypography-root MuiTypography-h5 mui-style-1udghyp">
                        Name your property
                      </h5>
                    </div>
                    <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorSecondary MuiInputBase-adornedEnd mui-style-r2mpwp">
                      <input
                        aria-invalid="false"
                        autoComplete="new-password"
                        placeholder="Name your property"
                        type="text"
                        className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd mui-style-1uvydh2"
                        value=""
                      />
                      <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd mui-style-1nvf7g0">
                        <div className="MuiBox-root mui-style-19sexz9">
                          <img src="" alt="" />
                        </div>
                      </div>
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline mui-style-igs3ac"
                      >
                        <legend className="mui-style-ihdtdm"></legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="MuiBox-root mui-style-vtn2l4">
                  <div className="MuiBox-root mui-style-1xjhmgv">
                    <span className="MuiTypography-root MuiTypography-caption1 mui-style-1vyrnn5">
                      SAVE AS DRAFT
                    </span>
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorSecondary MuiButton-root MuiButton-contained MuiButton-containedSecondary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorSecondary mui-style-pt3alo"
                      type="button"
                    >
                      Submit for review
                      <span className="MuiTouchRipple-root mui-style-w0pj6f"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seller;
