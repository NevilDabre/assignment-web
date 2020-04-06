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
  faBookmark,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';

import styled from 'styled-components';

const ButtonElement = styled.button`
  font-size: inherit;
  background-color: ${(props) =>
    props.theme.palette.type === 'light'
      ? props.theme.palette.common.white
      : props.theme.palette.common.black};
  color: ${(props) =>
    props.theme.palette.type === 'light'
      ? props.theme.palette.common.black
      : props.theme.palette.common.white};
  border: ${(props) =>
    props.theme.palette.type === 'light'
      ? props.theme.palette.common.white
      : props.theme.palette.common.black};
  transition: background-color 1s ease;
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
  faBookmark,
  faBookmarkRegular,
  faSun
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
