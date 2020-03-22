import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const TextControlHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;

const FontAwesomeIconElement = styled(FontAwesomeIcon)`
  &:hover {
    transform: scale(1.5);
  }
  transition: all 0.2s ease-in-out;
`;

const TextSizeControl = ({ handleTextSizeChanged }) => {
  return (
    <TextControlHolder>
      <h3>Text size:</h3>
      <FontAwesomeIconElement
        icon={faMinus}
        onClick={() => handleTextSizeChanged("decrease")}
      />
      <span>A</span>
      <FontAwesomeIconElement
        icon={faPlus}
        onClick={() => handleTextSizeChanged("increase")}
      />
    </TextControlHolder>
  );
};

export default TextSizeControl;
