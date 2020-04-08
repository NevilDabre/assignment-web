import React from 'react';
import './modalholder.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalWrapper = styled.div`
  display: ${(props) =>
    props.showModal ? 'block' : 'none'}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: ${(props) =>
    props.theme.palette.type === 'light'
      ? props.theme.palette.common.white
      : props.theme.palette.common.black};
  color: ${(props) => props.theme.palette.common.black};
`;

const ModalHolder = ({ showModal, children }) => {
  return <ModalWrapper showModal={showModal}>{children}</ModalWrapper>;
};

export default ModalHolder;

ModalHolder.propTypes = {
  showModal: PropTypes.bool.isRequired,
};
