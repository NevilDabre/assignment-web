import React, { useState, useImperativeHandle, forwardRef } from 'react';
import styled from 'styled-components';
import LessonNoteContextProvider from './Context/LessonNoteContextProvider';
import { LN_DELETE_NOTE } from './Context/LessonNoteContextType';
import { CreateLessonNoteContext } from './Context/LessonNoteContext';
import IconButton from '../../CommonElement/IconButton/IconButton';

import './lessonnotecard.css';
import LessonModal from './NoteModal/NoteModal';


const TextControlHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const LessonNoteHolder = forwardRef((props, ref) => {
  const [editLessonNote, setEditLessonNote] = useState();
  const [showModal, setShowModal] = useState(false);

  useImperativeHandle(ref, () => ({ handleCreateNote }));

  const handleCreateNote = (title) => {
    setEditLessonNote({ title });
    setShowModal(true);
  };

  const handleCreateEditModal = (lessonNote) => {
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

  const handleDeleteClick = (id, dispatch) => {
    if (id) {
      dispatch({ type: LN_DELETE_NOTE, payload: id });
    }
  };
  return (
    <>
      <LessonNoteContextProvider>
        <CreateLessonNoteContext.Consumer>
          {(context) => {
            const { lessonNotes, dispatch } = context;
            return (
              <div className="lessonnote-card lessonnote-content-wrapper">
                <TextControlHolder>
                  <h2>Lesson Note</h2>
                  <IconButton
                    handleOnClick={handleCreateEditModal}
                    iconName="faPencilAlt"
                    title="Create lesson note"
                    srText="Create lesson note"
                  />
                </TextControlHolder>

                <ul>
                  {lessonNotes &&
                    lessonNotes.length > 0 &&
                    lessonNotes.map((lessonNote, index) => {
                      return (
                        <li key={lessonNote.title}>
                          <span>
                            {index + 1}. {lessonNote.title}
                          </span>
                          <div className="note-icons">
                            <IconButton
                              handleOnClick={() =>
                                handleCreateEditModal(lessonNote)
                              }
                              iconName="faEdit"
                              title="Edit lesson note"
                              srText="Edit lesson note"
                            />
                            <IconButton
                              handleOnClick={() =>
                                handleDeleteClick(lessonNote.id, dispatch)
                              }
                              iconName="faTrashAlt"
                              title="Delete lesson note"
                              srText="Delete lesson note"
                            />
                          </div>
                        </li>
                      );
                    })}
                </ul>

                {lessonNotes && lessonNotes.length === 0 && (
                  <p className="empty-placeholder">
                    Press pen button to add notes.
                  </p>
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
          }}
        </CreateLessonNoteContext.Consumer>
      </LessonNoteContextProvider>
    </>
  );
});

export default LessonNoteHolder;
