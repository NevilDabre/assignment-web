import React, { useState, useEffect } from "react";
import axios from "axios";
import "./wordsearch.css";
var app_id = "542880cd";
var app_key = "05058d1b9064cde14616500e6a4e14cd";
const language = "en";
const word_id = "Ace";
const url =
  "https://od-api.oxforddictionaries.com:443/api/v2/entries/en/" +
  word_id.toLowerCase();
const urlFR =
  "https://od-api.oxforddictionaries.com:443/api/v2/stats/frequency/word/" +
  language +
  "/?corpus=nmc&lemma=" +
  word_id.toLowerCase();

const WordSearch = () => {
  const [word, setWord] = useState();
  const [wordType, setWordType] = useState();
  const [result, setResult] = useState();

  const handleChange = event => {
    setWord(event.target.value);
  };

  const getWordMeaning = () => {
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
    <div className="card">
      <div className="wordsearch-container">
        <input
          className="search-input"
          onClick={getWordMeaning}
          type="text"
          placeholder="Search word"
          onChange={handleChange}
        />
        <p>{wordType && `Type = ` + wordType}</p>
        <p>
          {result && result.definition && `Definition = ` + result.definition}
        </p>
        <p>{result && result.example && `Example = ` + result.example}</p>
      </div>
    </div>
  );
};

export default WordSearch;
