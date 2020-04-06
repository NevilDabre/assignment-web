import React, { useEffect, useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSun } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const FontAwesomeIconElement = styled(FontAwesomeIcon)`
  &:hover {
    transform: scale(1.5);
  }
  transition: all 0.2s ease-in-out;
`;

const BannerButtonLink = styled(Link)`
color: ${(props) =>
    props.theme.palette.type === 'light'
      ? props.theme.palette.common.white
      : props.theme.palette.common.black};
    `;

const Header = ({ toggleDarkTheme }) => {
  const [headerActive, setHeaderActive] = useState(false);
  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 10) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={
        headerActive ? 'active navigation-holder' : 'navigation-holder'
      }
      role="navigation"
      id="header"
    >
      <h2>
        <Link to="/">
          <FontAwesomeIconElement
            aria-hidden="true"
            title="logo"
            icon={faGraduationCap}
          />
          <span className="sr-only">Website Logo</span>
          &nbsp;LEARN
        </Link>
      </h2>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <BannerButtonLink to="/learningpage" className="banner-btn-link">
              Start Learning
            </BannerButtonLink>
          </li>
          <li>
            <FontAwesomeIconElement
              onClick={toggleDarkTheme}
              icon={faSun}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
