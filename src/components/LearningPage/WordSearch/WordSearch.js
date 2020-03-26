import React, { useState, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput/SearchInput';
import './wordsearch.css';

const WordSearch = forwardRef((props, ref) => {
  const [word, setWord] = useState();
  const [wordType, setWordType] = useState();
  const [result, setResult] = useState();
  const [placeholder, setPlaceHolder] = useState(
    'Type a word and press search button to find a word meaning.',
  );

  const handleChange = (event) => {
    setWord(event.target.value);
  };

  useImperativeHandle(ref, () => ({ handleSearchDictionary }));

  const handleSearchDictionary = (entity) => {
    let searchText;
    if (typeof entity === 'string') {
      searchText = entity;
      setWord(entity);
    } else {
      searchText = word;
    }

    if (searchText) {
      axios({
        method: 'GET',
        url: 'https://api.dictionaryapi.dev/api/v1/entries/en/' + searchText,
      })
        .then((response) => {
          if (response && response.data && response.data.length > 0) {
            const {
              meaning: {
                noun,
                exclamation,
                adjective,
                suffix,
                abbreviation,
                verb,
                preposition,
                adverb,
                'cardinal number': cardinalNumber,
              },
            } = response.data[0];

            if (noun && noun.length > 0) {
              setWordType('noun');
              setResult(noun[0]);
            } else if (exclamation && exclamation.length > 0) {
              setWordType('exclamation');
              setResult(exclamation[0]);
            } else if (adjective && adjective.length > 0) {
              setWordType('adjective');
              setResult(adjective[0]);
            } else if (suffix && suffix.length > 0) {
              setWordType('suffix');
              setResult(suffix[0]);
            } else if (abbreviation && abbreviation.length > 0) {
              setWordType('abbreviation');
              setResult(abbreviation[0]);
            } else if (verb && verb.length > 0) {
              setWordType('verb');
              setResult(verb[0]);
            } else if (preposition && preposition.length > 0) {
              setWordType('preposition');
              setResult(preposition[0]);
            } else if (adverb && adverb.length > 0) {
              setWordType('adverb');
              setResult(adverb[0]);
            } else if (cardinalNumber && cardinalNumber.length > 0) {
              setWordType('cardinal_number');
              setResult(cardinalNumber[0]);
            }
          }
        })
        .catch((error) => {
          setWordType();
          setResult();
          setPlaceHolder("Sorry, unable to find provided word's meaning.");
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

      {!wordType && <p className="empty-placeholder">{placeholder}</p>}
    </div>
  );
});

export default WordSearch;
