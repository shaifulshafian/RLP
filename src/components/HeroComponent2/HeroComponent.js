import React, { Component } from "react";
import "./style.css";
import "../../../public/device-mockups/device-mockups.css";
// import "../../device-mockups/device-mockups.min.css";
import demoScreen1 from "../../demo-screen-1.jpg";

export const HeroComponent = props => {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Why pay thousands of dollars when the best is free? Over 12,500
                active accounts!!!
              </h1>
              <a
                href="#download"
                className="btn btn-outline btn-xl js-scroll-trigger"
              >
                Click Now for Freelah!!!
              </a>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6 portrait gold">
                <div className="device">
                  <div className="screen">
                    <img src={demoScreen1} className="img-fluid" alt="" />
                  </div>
                  <div className="button" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
