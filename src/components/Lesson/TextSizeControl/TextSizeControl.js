import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconButton from '../../CommonElement/IconButton/IconButton';

const TextControlHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    margin-left: 2em;
    margin-top: 5px;
    & > * {
      margin-left: 10px;
    }
    & > *:first-child {
      margin-left: 0;
    }
  }
`;

const TextSizeControl = ({ handleTextSizeChanged }) => {
  return (
    <TextControlHolder>
      <small>
        <h3>Text size:</h3>
      </small>
      <IconButton
        handleOnClick={() => handleTextSizeChanged('decrease')}
        iconName="faMinusCircle"
        title="Decrease text size"
        srText="Decrease text size"
      />
      <IconButton
        handleOnClick={() => handleTextSizeChanged()}
        iconName="faFont"
        title="Default text size"
        srText="Default text size"
      />
      <IconButton
        handleOnClick={() => handleTextSizeChanged('increase')}
        iconName="faPlusCircle"
        title="Increase text size"
        srText="Increase text size"
      />
    </TextControlHolder>
  );
};

export default TextSizeControl;

TextSizeControl.propTypes = {
  handleTextSizeChanged: PropTypes.func,
};
