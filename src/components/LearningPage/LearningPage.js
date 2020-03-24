import React from "react";
import Lesson from "../Lesson/Lesson";

const LearningPage = ({ handleTextSizeChanged, textSize }) => {
  return (
    <>
        <Lesson textSize={textSize} />
    </>
  );
};

export default LearningPage;
