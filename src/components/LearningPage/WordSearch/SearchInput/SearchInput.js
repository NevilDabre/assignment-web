import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const PaperElement = styled(Paper)`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const InputBaseElement = styled(InputBase)`
  margin-left: 15px;
  flex: 1;
`;

const SearchInput = ({ handleSearchDictionary, handleChange }) => {
  return (
    <PaperElement style={{ borderRadius: 40 }}>
      <InputBaseElement
        placeholder="Search your word"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleChange}
      />
      <IconButton onClick={handleSearchDictionary} aria-label="search">
        <FontAwesomeIcon
          icon={faSearch}
          title="Search word in dictionary button"
        />
        <span className="sr-only">Search word in dictionary button</span>
      </IconButton>
    </PaperElement>
  );
};

export default SearchInput;
