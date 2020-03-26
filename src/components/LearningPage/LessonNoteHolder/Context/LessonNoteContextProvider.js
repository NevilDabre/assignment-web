import React, { useReducer } from "react";
import { CreateLessonNoteContext } from "./LessonNoteContext";

import {
  LN_CREATE_NOTE,
  LN_EDIT_NOTE,
  LN_DELETE_NOTE
} from "./LessonNoteContextType";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case LN_CREATE_NOTE: {
      let nextId = 1;
      const { lessonNotes } = state;
      if (lessonNotes.length > 0) {
        nextId += lessonNotes[lessonNotes.length - 1].id;
      }
      payload.id = nextId;
      return { ...state, lessonNotes: [...state.lessonNotes, payload] };
    }
    case LN_EDIT_NOTE: {
      let modifiedLessonNotes = state.lessonNotes.map(lessonNote => {
        if (payload.id === lessonNote.id) {
          return payload;
        }
        return lessonNote;
      });
      return { ...state.lessonNotes, lessonNotes: modifiedLessonNotes };
    }
    case LN_DELETE_NOTE: {
      let filteredLessonNotes = state.lessonNotes.filter(
        ({ id }) => id !== payload
      );
      return { ...state.lessonNotes, lessonNotes: filteredLessonNotes };
    }
    default:
      return state;
  }
};

const initialState = {
  lessonNotes: []
};

const LessonNoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CreateLessonNoteContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CreateLessonNoteContext.Provider>
  );
};

export default LessonNoteContextProvider;
