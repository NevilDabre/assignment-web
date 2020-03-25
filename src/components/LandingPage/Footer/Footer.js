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
      <footer role="contentinfo" id="footer">
        <span>&copy; 2020 All rights are reserved.</span>
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
      </footer>
    </>
  );
};

export default Footer;
