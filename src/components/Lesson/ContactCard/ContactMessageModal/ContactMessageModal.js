import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ModalHolder from "../../../CommonElement/ModalHolder/ModalHolder";
import BrandButton from "../../../CommonElement/BrandButton/BrandButton.css";

const ContactMessageModal = ({ showModal, closeModal }) => {
  const [message, setMessage] = useState();

  const handleFieldChange = event => {
    setMessage(event.target.value);
  };

  const handleSendMessage = title => {
    // Clear values
    setMessage();
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
          <h2>Your message / questions</h2>
        </div>
        <div className="modal-body">
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
            value={message}
          />
        </div>
        <div className="modal-footer">
          <BrandButton onClick={handleSendMessage} className="button-updated">
            Save
          </BrandButton>
        </div>
      </div>
    </ModalHolder>
  );
};

export default ContactMessageModal;
