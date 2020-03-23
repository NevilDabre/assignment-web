import React from "react";
import styled from "styled-components";
import Lesson from "../Lesson/Lesson";
import Post from "../Post/Post";
import SpeechControl from "../SpeechControl/SpeechControl";
import TextSizeControl from "../TextSizeControl/TextSizeControl";
import WordSearch from "./WordSearch/WordSearch";

const ControlHolder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LearningPage = ({ handleTextSizeChanged, textSize }) => {
  return (
    <>
      <WordSearch />
      <Post>
        <ControlHolder>
          <SpeechControl />
          <TextSizeControl handleTextSizeChanged={handleTextSizeChanged} />
        </ControlHolder>
        <Lesson textSize={textSize} />
      </Post>
    </>
  );
};

export default LearningPage;
