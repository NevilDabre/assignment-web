import React, { forwardRef, createRef } from "react";
import LessonNoteContextProvider from "./Context/LessonNoteContextProvider";
import LessonNoteCard from "./LessonNoteCard/LessonNoteCard";

const LessonNoteHolder = forwardRef((props, ref) => {
  const LessonNoteRef = createRef(ref);
  return (
    <>
      <LessonNoteContextProvider>
        <LessonNoteCard ref={LessonNoteRef} />
      </LessonNoteContextProvider>
    </>
  );
});

export default LessonNoteHolder;
