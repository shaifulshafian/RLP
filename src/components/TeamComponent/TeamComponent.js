import React from "react";
import "./style.css";

import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBAvatar,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBContainer
} from "mdbreact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGooglePlus,
  faLinkedinIn,
  faPinterestP,
  faGithub,
  faDribbbleSquare
} from "@fortawesome/free-brands-svg-icons";

export const TeamComponent = props => {
  return (
    // my-5 px-1 pb-5

    <MDBCard className=" text-center teams" id="team">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold my-5">
          Our amazing team
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol md="4" className="mb-md-0 mb-5">
            <img
              tag="img"
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
              className="rounded z-depth-1-half img-fluid"
              alt="Sample avatar"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">Nur Kate</h4>
            <h6 className="text-uppercase grey-text mb-3">Photographer</h6>
            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
              <FontAwesomeIcon icon={faFacebook} />
            </MDBBtn>
            <MDBBtn
              tag="a"
              floating
              size="sm"
              className="mx-1 mb-0 btn-dribbble"
            >
              <FontAwesomeIcon icon={faDribbbleSquare} />
            </MDBBtn>
            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
              <FontAwesomeIcon icon={faTwitter} />
            </MDBBtn>
          </MDBCol>

          <MDBCol md="4" className="mb-md-0 mb-5">
            <img
              tag="img"
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
              className="rounded z-depth-1-half img-fluid"
              alt="Sample avatar"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">
              Anwar Ibrahim
            </h4>
            <h6 className="text-uppercase grey-text mb-3">
              Front-end Developer
            </h6>
            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-email">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </MDBBtn>
            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
              <FontAwesomeIcon icon={faFacebook} />
            </MDBBtn>
            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-git">
              <MDBIcon fab icon="github" />
              <FontAwesomeIcon icon={faGithub} />
            </MDBBtn>
          </MDBCol>

          <MDBCol md="4" className="mb-md-0 mb-5">
            <img
              tag="img"
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
              className="rounded z-depth-1-half img-fluid"
              alt="Sample avatar"
            />
            <h4 className="font-weight-bold dark-grey-text my-4">
              Makcik Melyah
            </h4>
            <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-li">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </MDBBtn>
            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-tw">
              <FontAwesomeIcon icon={faTwitter} />
            </MDBBtn>
            <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-pin">
              <FontAwesomeIcon icon={faPinterestP} />
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};
