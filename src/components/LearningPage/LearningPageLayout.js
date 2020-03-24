import React from "react";
import "./LearningPageLayout.css";
import Header from "../LandingPage/Header/Header";
import LearningPage from "./LearningPage";
import WordSearch from "./WordSearch/WordSearch";
import Footer from "../LandingPage/Footer/Footer";
import ContactCard from "../Lesson/ContactCard/ContactCard";

const LearningPageLayout = () => {
  return (
    <div className="main-container">
      <div className="header-panel">
        <Header />
      </div>
      <div className="flex-container wrapper">
        <div className="content">
          <LearningPage />
        </div>
        <div className="right-panel">
          <ContactCard />
          <WordSearch />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LearningPageLayout;
