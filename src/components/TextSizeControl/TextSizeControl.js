import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faFont
} from "@fortawesome/free-solid-svg-icons";

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
        icon={faMinusCircle}
        onClick={() => handleTextSizeChanged("decrease")}
      />
      <FontAwesomeIconElement
        icon={faFont}
        onClick={() => handleTextSizeChanged()}
      />
      <FontAwesomeIconElement
        icon={faPlusCircle}
        onClick={() => handleTextSizeChanged("increase")}
      />
    </TextControlHolder>
  );
};

export default TextSizeControl;
