import React from 'react';
import Lesson from './Lesson/Lesson';

const LearningPage = ({
  textSize,
  wordSearchRef,
  lessonNoteRef,
}) => {
  return (
    <>
      <Lesson
        textSize={textSize}
        wordSearchRef={wordSearchRef}
        lessonNoteRef={lessonNoteRef}
      />
    </>
  );
};

export default LearningPage;
