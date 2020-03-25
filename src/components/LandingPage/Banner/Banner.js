import React from "react";
import "./banner.css";
import styled from 'styled-components';

const Banner = () => {
  return (
    <section className="banner-area" role="banner" id="content">
      <div className="banner-img" />
      <h1>E-Learning Platform</h1>
      <h3>A complete and innovative solution </h3>
      <a href="#" className="banner-btn">
        Watch Video
      </a>
    </section>
  );
};

export default Banner;
