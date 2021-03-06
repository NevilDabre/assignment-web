import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import './contactcard.css';
import ContactMessageModal from './ContactMessageModal/ContactMessageModal';
import MainButtonElement from '../../CommonElement/BrandButton/BrandButton.css';

const FontAwesomeIconElement = styled(FontAwesomeIcon)`
  &:hover {
    transform: scale(1.5);
  }
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 0 10px 0 10px;
`;

const ContactCard = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div className="contact-card">
      <ContactMessageModal
        showModal={showModal}
        closeModal={handleCloseModal}
      />
      <img
        src="/images/professor.jpeg"
        className="contact-image"
        alt="Professor James. Credit- unsplash.com"
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
        <MainButtonElement
          href="#"
          style={{ padding: '8px' }}
          className="contact-button-updated"
          onClick={handleOpenModal}
        >
          Contact
        </MainButtonElement>
      </div>
    </div>
  );
};

export default ContactCard;
