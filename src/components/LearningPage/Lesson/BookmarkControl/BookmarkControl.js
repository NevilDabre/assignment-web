import React from 'react';
import styled from 'styled-components';
import IconButton from '../../../CommonElement/IconButton/IconButton';

const BookmarkControlHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20%;
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

const BookmarkControl = ({ handleBookmarkChanged, isBookmarked }) => {
  return (
    <BookmarkControlHolder>
      <small>
        <h3>Bookmark:</h3>
      </small>
      <IconButton
        iconName={`${!isBookmarked ? 'faBookmarkRegular' : 'faBookmark'}`}
        title={`${!isBookmarked ? 'Add' : 'Remove'} bookmark`}
        srText={`${!isBookmarked ? 'Add' : 'Remove'} bookmark`}
        handleOnClick={handleBookmarkChanged}
      />
    </BookmarkControlHolder>
  );
};

export default BookmarkControl;
