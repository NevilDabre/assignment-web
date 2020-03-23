import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const FontAwesomeIconElement = styled(FontAwesomeIcon)`
  &:hover {
    transform: scale(1.5);
  }
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 0 10px 0 10px;
`;

const Footer = () => {
  return (
    <>
      <footer>
        <span>&copy; 2020 All rights are reserved.</span>
        <div className="social-media-holder">
          <FontAwesomeIconElement icon={faFacebook} />
          <FontAwesomeIconElement icon={faTwitter} />
          <FontAwesomeIconElement icon={faLinkedin} />
          <FontAwesomeIconElement icon={faYoutube} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
