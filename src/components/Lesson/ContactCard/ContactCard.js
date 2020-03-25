import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import "./contactcard.css";

const FontAwesomeIconElement = styled(FontAwesomeIcon)`
  &:hover {
    transform: scale(1.5);
  }
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 0 10px 0 10px;
`;

const ContactCard = () => {
  return (
    <div className="contact-card">
      <img
        src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2015&q=80"
        className="contact-image"
        alt="Professor James"
      />
      <p className="title">Written by</p>
      <h2> James Brown</h2>
      <p className="title">Science Department</p>
      <p className="school-name">St. John High School</p>
      <div className="social-media-holder">
        <a href="#">
          <FontAwesomeIconElement icon={faFacebook} title="Facebook link" />
          <span className="sr-only">Facebook link</span>
        </a>
        <a href="#">
          <FontAwesomeIconElement icon={faTwitter} title="Twitter link" />
          <span className="sr-only">Twitter link</span>
        </a>
        <a href="#">
          <FontAwesomeIconElement icon={faLinkedin} title="Linkedin link" />
          <span className="sr-only">Linkedin link</span>
        </a>
        <a href="#">
          <FontAwesomeIconElement icon={faYoutube} title="Youtube link" />
          <span className="sr-only">Youtube link</span>
        </a>
      </div>
      <div>
        <button className="contact-button">Contact</button>
      </div>
    </div>
  );
};

export default ContactCard;
