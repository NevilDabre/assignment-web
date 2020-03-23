import React from "react";
import "./LearningPageLayout.css";
import Header from "../LandingPage/Header/Header";
import Footer from "../LandingPage/Footer/Footer";

const LearningPageLayout = () => {
  return (
    <div className="main-container">
      <div className="header-panel">
        <Header />
      </div>
      <div className="flex-container wrapper">
        <div className="content">
          content
          <p>
            this is a content. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="right-panel">
          Right Panel
          <p>this is a right panel content</p>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LearningPageLayout;
