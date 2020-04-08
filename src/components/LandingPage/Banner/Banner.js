import React, { useState } from 'react';
import styled from 'styled-components';
import './banner.css';
import ModalHolder from '../../CommonElement/ModalHolder/ModalHolder';
import VideoFrame from '../../CommonElement/VideoFrame/VideoFrame';
import MainButtonElement from '../../CommonElement/BrandButton/BrandButton.css';

const HeadingContainer = styled.div`
/* color: ${(props) => {
    return props.theme.palette.type === 'light'
      ? props.theme.palette.common.white
      : props.theme.palette.common.black;
  }
}; */
`;

const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };
  const handleShowModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  };
  return (
    <section className="banner-area" role="main" id="content">
      <div className="banner-img" />
      <HeadingContainer>
        <h1>E-Learning Platform</h1>
        <h2>A complete and innovative solution </h2>
      </HeadingContainer>
      <MainButtonElement href="#" onClick={handleShowModal}>
        Watch Video
      </MainButtonElement>
      <ModalHolder showModal={showModal}>
        <div className="modal-content">
          <div className="modal-header">
            <span role="button" onKeyUp={handleCloseModal} tabIndex="0" onClick={handleCloseModal} className="close">
              &times;
            </span>
          </div>
          <div className="modal-body">
            <VideoFrame youtubeId="QMy7Sj6TLxU" name="introduction_video" />
          </div>
          <div className="modal-footer" />
        </div>
      </ModalHolder>
    </section>
  );
};

export default Banner;
