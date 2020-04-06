import React, { createRef } from 'react';
import './LearningPageLayout.css';
import Header from '../LandingPage/Header/Header';
import LearningPage from './LearningPage';
import WordSearch from './WordSearch/WordSearch';
import Footer from '../LandingPage/Footer/Footer';
import ContactCard from '../Lesson/ContactCard/ContactCard';
import LessonNoteHolder from './LessonNoteHolder/LessonNoteHolder';
import styled from 'styled-components';

const MainElement = styled.main`
  background-color: ${(props) =>
    props.theme.palette.type === 'light'
      ? props.theme.palette.common.white
      : props.theme.palette.common.black};
  color: ${(props) =>
    props.theme.palette.type === 'light'
      ? props.theme.palette.common.black
      : props.theme.palette.common.white};
  transition: background-color 1s ease;
`;

// ${(props) => props.theme.palette.primary.main}

const LearningPageLayout = ({ toggleDarkTheme }) => {
  const wordSearchRef = createRef();
  const lessonNoteRef = createRef();

  return (
    <MainElement className="main-container">
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
      <div className="header-panel">
        <Header toggleDarkTheme={toggleDarkTheme} />
      </div>
      <div className="flex-container wrapper" id="content">
        <div className="content">
          <LearningPage
            wordSearchRef={wordSearchRef}
            lessonNoteRef={lessonNoteRef}
          />
        </div>
        <div className="right-panel">
          <ContactCard />
          <WordSearch ref={wordSearchRef} />
          <LessonNoteHolder ref={lessonNoteRef} />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </MainElement>
  );
};

export default LearningPageLayout;
