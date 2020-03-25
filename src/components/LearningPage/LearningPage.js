import React from "react";
import Lesson from "../Lesson/Lesson";

const LearningPage = ({ handleTextSizeChanged, textSize, wordSearchRef }) => {
  return (
    <>
      <Lesson textSize={textSize} wordSearchRef={wordSearchRef} />
    </>
  );
};

export default LearningPage;
