import React, { useState } from "react";
import "./banner.css";
import styled from "styled-components";
import ModalHolder from "../../CommonElement/ModalHolder/ModalHolder";
import VideoFrame from "../../CommonElement/VideoFrame/VideoFrame";
import MainButtonElement from "../../CommonElement/BrandButton/BrandButton.css";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = event => {
    event.preventDefault();
    setShowModal(true);
  };
  return (
    <section className="banner-area" role="banner" id="content">
      <div className="banner-img" />
      <h1>E-Learning Platform</h1>
      <h3>A complete and innovative solution </h3>
      <MainButtonElement href="#" onClick={handleShowModal}>
        Watch Video
      </MainButtonElement>
      <ModalHolder showModal={showModal}>
        <div className="modal-content">
          <div className="modal-header">
            <span onClick={handleCloseModal} className="close">
              &times;
            </span>
          </div>
          <div className="modal-body">
            <VideoFrame youtubeId="QMy7Sj6TLxU" name="d2l_video" />
          </div>
          <div className="modal-footer"></div>
        </div>
      </ModalHolder>
    </section>
  );
};

export default Banner;
