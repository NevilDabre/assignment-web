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
  const lessonNoteRef = createRef(ref);

  useImperativeHandle(ref, () => ({ checkHandle }));

  const checkHandle = text => {
    console.log(text);
  };

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
        <FontAwesomeIconElement
          icon={faPencilAlt}
          onClick={handleCreateEditModal}
        />
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
                  <FontAwesomeIconElement
                    className="list-control"
                    icon={faEdit}
                    onClick={() => handleCreateEditModal(lessonNote)}
                  />
                  <FontAwesomeIconElement
                    className="list-control"
                    icon={faTrashAlt}
                    onClick={() => handleDeleteClick(lessonNote.id)}
                  />
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
