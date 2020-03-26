import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import IconButton from "../../CommonElement/IconButton/IconButton"

const TextControlHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;

const TextSizeControl = ({ handleTextSizeChanged }) => {
  return (
    <TextControlHolder>
      <h3>Text size:</h3>
      <IconButton handleOnClick={() => handleTextSizeChanged("decrease")} iconName="faMinusCircle" title="Decrease text size" srText="Decrease text size" />
      <IconButton handleOnClick={() => handleTextSizeChanged()} iconName="faFont" title="Default text size" srText="Default text size" />
      <IconButton handleOnClick={() => handleTextSizeChanged("increase")} iconName="faPlusCircle" title="Increase text size" srText="Increase text size" />
    </TextControlHolder>
  );
};

export default TextSizeControl;

TextSizeControl.propTypes = {
  handleTextSizeChanged: PropTypes.func
}
