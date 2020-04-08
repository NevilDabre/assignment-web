import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ModalHolder from '../../../CommonElement/ModalHolder/ModalHolder';
import BrandButton from '../../../CommonElement/BrandButton/BrandButton.css';

const ModalHeaderElement = styled.div`
  color: ${(props) =>
    props.theme.palette.type === 'light'
      ? props.theme.palette.common.black
      : props.theme.palette.common.white};
`;

const ContactMessageModal = ({ showModal, closeModal }) => {
  const [message, setMessage] = useState();

  const handleFieldChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = (title) => {
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
        <ModalHeaderElement className="modal-header">
          <span
            role="button"
            onKeyUp={closeModal}
            tabIndex={0}
            onClick={closeModal}
            className="close">
            &times;
          </span>
          <h2>Your message / questions</h2>
        </ModalHeaderElement>
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
            Send
          </BrandButton>
        </div>
      </div>
    </ModalHolder>
  );
};

export default ContactMessageModal;

ContactMessageModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
