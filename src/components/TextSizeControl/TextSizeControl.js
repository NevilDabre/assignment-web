import React from "react";

import styled from "styled-components";
import IconButton from "../CommonElement/IconButton/IconButton"

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
      <IconButton handleOnClick={() => handleTextSizeChanged("decrease")} iconName="faMinusCircle" title="Decrease text size button" srText="Decrease text size button" />
      <IconButton handleOnClick={() => handleTextSizeChanged()} iconName="faFont" title="Default text size button" srText="Default text size button" />
      <IconButton handleOnClick={() => handleTextSizeChanged("increase")} iconName="faPlusCircle" title="Increase text size button" srText="Increase text size button" />
    </TextControlHolder>
  );
};

export default TextSizeControl;
