import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./SearchInput/SearchInput";
import "./wordsearch.css";

const WordSearch = () => {
  const [word, setWord] = useState();
  const [wordType, setWordType] = useState();
  const [result, setResult] = useState();

  const handleChange = event => {
    setWord(event.target.value);
  };

  const handleSearchDictionary = () => {
    if (word) {
      axios({
        method: "GET",
        url: "https://api.dictionaryapi.dev/api/v1/entries/en/" + word
      })
        .then(response => {
          if (response && response.data && response.data.length > 0) {
            console.log(response);
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
    </div>
  );
};

export default WordSearch;
