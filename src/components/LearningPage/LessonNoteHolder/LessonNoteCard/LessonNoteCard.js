import React, {
  useContext,
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  createRef
} from "react";
import {
  LN_CREATE_NOTE,
  LN_EDIT_NOTE,
  LN_DELETE_NOTE
} from "../Context/LessonNoteContextType";
import { CreateLessonNoteContext } from "../Context/LessonNoteContext";
import IconButton from "../../../CommonElement/IconButton/IconButton"

import "./lessonnotecard.css";
import LessonModal from "../NoteModal/NoteModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrashAlt,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const TextControlHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const FontAwesomeIconElement = styled(FontAwesomeIcon)`
  &:hover {
    transform: scale(1.5);
  }
  transition: all 0.2s ease-in-out;
`;

const LessonNoteCard = forwardRef((props, ref) => {
  const { lessonNotes, dispatch } = useContext(CreateLessonNoteContext);
  const [editLessonNote, setEditLessonNote] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleCreateEditModal = lessonNote => {
    if (lessonNote) {
      setEditLessonNote(lessonNote);
    } else {
      setEditLessonNote();
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteClick = id => {
    if (id) {
      dispatch({ type: LN_DELETE_NOTE, payload: id });
    }
  };

  return (
    <div className="lessonnote-card lessonnote-content-wrapper">
      <TextControlHolder>
        <h2>Lesson Note</h2>
        <IconButton handleOnClick={handleCreateEditModal} iconName="faPencilAlt" title="Create lesson note" srText="Create lesson note" />
      </TextControlHolder>

      <ul>
        {lessonNotes &&
          lessonNotes.length > 0 &&
          lessonNotes.map((lessonNote, index) => {
            return (
              <li>
                <span>
                  {index + 1}. {lessonNote.title}
                </span>
                <div>
                <IconButton handleOnClick={() => handleDeleteClick(lessonNote.id)} iconName="faEdit" title="Edit lesson note" srText="Edit lesson note" />
                <IconButton handleOnClick={() => handleCreateEditModal(lessonNote)} iconName="faTrashAlt" title="Delete lesson note" srText="Delete lesson note" />
                </div>
              </li>
            );
          })}
      </ul>

      {lessonNotes && lessonNotes.length === 0 && (
        <p className="empty-placeholder">Press pen button to add notes.</p>
      )}
      <LessonModal
        closeModal={handleCloseModal}
        showModal={showModal}
        lessonNote={editLessonNote}
        dispatch={dispatch}
        ref={ref}
      />
    </div>
  );
});

export default LessonNoteCard;
