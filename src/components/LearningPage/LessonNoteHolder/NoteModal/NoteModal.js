import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LN_CREATE_NOTE, LN_EDIT_NOTE } from "../Context/LessonNoteContextType";
import ModalHolder from "../../../CommonElement/ModalHolder/ModalHolder";
import BrandButton from '../../../CommonElement/BrandButton/BrandButton.css'

const NoteModal = forwardRef(
  ({ closeModal, showModal, lessonNote, dispatch }, ref) => {
    const [currentNoteTitle, setCurrentNoteTitle] = useState();
    const [currentNoteDescription, setCurrentNoteDescription] = useState();

    useEffect(() => {
      if (lessonNote) {
        setCurrentNoteTitle(lessonNote.title);
        setCurrentNoteDescription(lessonNote.description);
      }
    }, [lessonNote]);

    useImperativeHandle(ref, () => ({ handleCreateEditNote }));

    const handleFieldChange = event => {
      const {
        target: { name, value }
      } = event;
      if (name === "title") {
        setCurrentNoteTitle(value);
      } else if (name === "description") setCurrentNoteDescription(value);
    };

    const handleCreateEditNote = title => {
      if (lessonNote && lessonNote.id) {
        dispatch({
          type: LN_EDIT_NOTE,
          payload: {
            id: lessonNote.id,
            title: currentNoteTitle,
            description: currentNoteDescription
          }
        });
      } else {
        dispatch({
          type: LN_CREATE_NOTE,
          payload: {
            title: currentNoteTitle,
            description: currentNoteDescription
          }
        });
      }

      // Clear values
      setCurrentNoteTitle();
      setCurrentNoteDescription();
      closeModal();
    };

    if (!showModal) {
      return null;
    }
    return (
      <ModalHolder showModal={showModal}>
        <div className="modal-content">
          <div className="modal-header">
            <span onClick={closeModal} className="close">
              &times;
            </span>
            <h2>{`${lessonNote && lessonNote.id ? "Edit " : "Add "}`} Note</h2>
          </div>
          <div className="modal-body">
            <TextField
              id="title"
              name="title"
              label="Title"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={handleFieldChange}
              value={currentNoteTitle}
            />
            <TextField
              id="description"
              name="description"
              label="Description"
              fullWidth
              margin="normal"
              variant="outlined"
              multiline={true}
              rows={4}
              onChange={handleFieldChange}
              value={currentNoteDescription}
            />
          </div>
          <div className="modal-footer">
          <BrandButton onClick={handleCreateEditNote} className="button-updated"> 
              Save
            </BrandButton>
          </div>
        </div>
      </ModalHolder>
    );
  }
);

export default NoteModal;
