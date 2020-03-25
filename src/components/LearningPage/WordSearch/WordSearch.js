import React, { useState, forwardRef, useImperativeHandle } from "react";
import axios from "axios";
import SearchInput from "./SearchInput/SearchInput";
import "./wordsearch.css";

const WordSearch = forwardRef((props, ref) => {
  const [word, setWord] = useState();
  const [wordType, setWordType] = useState();
  const [result, setResult] = useState();

  const handleChange = event => {
    setWord(event.target.value);
  };

  useImperativeHandle(ref, () => ({ handleSearchDictionary }));

  const handleSearchDictionary = entity => {
    let searchText;
    if (typeof entity === "string") {
      searchText = entity;
      setWord(entity);
    } else {
      searchText = word;
    }

    if (searchText) {
      axios({
        method: "GET",
        url: "https://api.dictionaryapi.dev/api/v1/entries/en/hello"
      })
        .then(response => {
          if (response && response.data && response.data.length > 0) {
            const {
              meaning: { noun, exclamation, adjective }
            } = response.data[0];

            if (noun && noun.length > 0) {
              setWordType("noun");
              setResult(noun[0]);
            } else if (exclamation && exclamation.length > 0) {
              setWordType("exclamation");
              setResult(exclamation[0]);
            } else if (adjective && adjective.length > 0) {
              setWordType("adjective");
              setResult(adjective[0]);
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div className="wordsearch-card wordsearch-content-wrapper">
      <h2>Dictionary</h2>
      <SearchInput
        handleSearchDictionary={handleSearchDictionary}
        handleChange={handleChange}
      />
      <p className="word-info">
        <em>{wordType}</em>
      </p>
      <p className="word-info">
        {result && result.definition && `Definition: ` + result.definition}
      </p>
      <p className="word-info light">
        {result && result.example && `"` + result.example + '"'}
      </p>

      {!wordType && (
        <p className="empty-placeholder">
          Type a word and press search button to find a word meaning.
        </p>
      )}
    </div>
  );
});

export default WordSearch;
