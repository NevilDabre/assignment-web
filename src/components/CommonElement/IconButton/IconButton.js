import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faMinusCircle,
  faFont,
  faPlay,
  faStop,
  faSearch,
  faPencilAlt,
  faEdit,
  faTrashAlt,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const ButtonElement = styled.button`
  font-size: inherit;
  border: #fff;
  /* color: ${(props) => (props.color ? props.color : '#000')}; */
`;

const FontAwesomeIconElement = styled(FontAwesomeIcon)`
  &:hover {
    transform: scale(1.5);
  }
  transition: all 0.2s ease-in-out;
`;

const iconsList = {
  faPlusCircle,
  faMinusCircle,
  faFont,
  faPlay,
  faStop,
  faSearch,
  faPencilAlt,
  faEdit,
  faTrashAlt,
  faPause,
};

const IconButton = ({ handleOnClick, iconName, title, srText, color }) => {
  const icon = iconsList[iconName];
  return (
    <>
      <ButtonElement onClick={handleOnClick}>
        <FontAwesomeIconElement icon={icon} title={title} color={color} />
        <span className="sr-only">{srText}</span>
      </ButtonElement>
    </>
  );
};

export default IconButton;
