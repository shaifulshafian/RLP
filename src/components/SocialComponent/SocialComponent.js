import React, { Component } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGooglePlus
} from "@fortawesome/free-brands-svg-icons";

export const SocialComponent = props => {
  return (
    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          We
          <i className="fa fa-heart" />
          new friends!
        </h2>
        <ul className="list-inline list-social">
          <li className="list-inline-item social-twitter">
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="list-inline-item social-facebook">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className="list-inline-item social-google-plus">
            <a href="#">
              <FontAwesomeIcon icon={faGooglePlus} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
