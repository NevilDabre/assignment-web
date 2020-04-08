import React from 'react';
import PropTypes from 'prop-types';
import './landingpage.css';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

const LandingPage = ({ toggleDarkTheme }) => {
  return (
    <>
      <ul className="skip-links">
        <li>
          <a href="#header">Skip to navigation</a>
        </li>
        <li>
          <a href="#content">Skip to content</a>
        </li>
        <li>
          <a href="#footer">Skip to footer</a>
        </li>
      </ul>
      <Header toggleDarkTheme={toggleDarkTheme} />
      <Banner />
      <Footer />
    </>
  );
};

export default LandingPage;

LandingPage.propTypes = {
  toggleDarkTheme: PropTypes.func.isRequired,
};
