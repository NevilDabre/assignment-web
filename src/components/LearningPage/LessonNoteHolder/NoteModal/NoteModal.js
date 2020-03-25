import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import "./notemodal.css";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LN_CREATE_NOTE, LN_EDIT_NOTE } from "../Context/LessonNoteContextType";

const ModalHolder = styled.div`
  display: ${props =>
    props.showModal ? "block" : "none"}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

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
console.log('title', title);
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
        <div class="modal-content">
          <div class="modal-header">
            <span onClick={closeModal} class="close">
              &times;
            </span>
            <h2>{`${lessonNote && lessonNote.id ? "Edit " : "Add "}`} Note</h2>
          </div>
          <div class="modal-body">
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
          <div class="modal-footer">
            <Button
              onClick={handleCreateEditNote}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </div>
        </div>
      </ModalHolder>
    );
  }
);

export default NoteModal;
