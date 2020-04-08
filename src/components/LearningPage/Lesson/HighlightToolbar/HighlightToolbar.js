import React, { useEffect, forwardRef } from 'react';
import PopOver from 'react-text-selection-popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faStop,
  faPencilAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useSpeechSynthesis } from 'react-speech-kit';
import './highlighttoolbar.css';

const FontAwesomeIconElement = styled(FontAwesomeIcon)`
  &:hover {
    transform: scale(1.5);
  }
  transition: all 0.2s ease-in-out;
  margin: 0 5px;
`;

const HighlightToolbar = forwardRef(
  ({ popOverTextParagraphRef, wordSearchRef, lessonNoteRef }, ref) => {
    const { speak, cancel, speaking } = useSpeechSynthesis();

    const handleWordSearch = () => {
      const selectedText = handleTextSelected();
      wordSearchRef.current.handleSearchDictionary(selectedText);
    };

    const handleLessonNote = () => {
      const selectedText = handleTextSelected();
      lessonNoteRef.current.handleCreateNote(selectedText);
    };

    const handleStartSpeech = () => {
      const selectedText = handleTextSelected();
      speak({ text: selectedText });
    };

    const handleTextSelected = () => {
      let result = window.getSelection() || document.getSelection();
      if (!result && document.selection) {
        result = document.selection.createRange().text;
      }

      if (result) {
        return result.toString();
      }
    };

    useEffect(() => {
      window.addEventListener('mouseup', handleTextSelected);
    }, []);

    useEffect(() => {
      return () => {
        window.removeEventListener('mouseup', handleTextSelected);
      };
    }, []);

    return (
      <PopOver selectionRef={ref}>
        <span className="tooltiptext tooltip-control-holder">
          {!speaking && (
            <button
              style={{
                background: 'none',
                fontSize: 18,
                fontWeight: 'bold',
                border: 'none',
                color: '#fff',
              }}
            >
              <FontAwesomeIconElement
                onClick={() => {
                  handleStartSpeech();
                }}
                icon={faPlay}
                title="Start speech"
              />
              <span className="sr-only">Start speech buttonn</span>
            </button>
          )}
          {speaking && (
            <button
              style={{
                background: 'none',
                fontSize: 18,
                fontWeight: 'bold',
                border: 'none',
                color: '#fff',
              }}
            >
              <FontAwesomeIconElement
                onClick={cancel}
                icon={faStop}
                title="Stop speech"
              />
              <span className="sr-only">Stop speech button</span>
            </button>
          )}

          <button
            style={{
              background: 'none',
              fontSize: 18,
              fontWeight: 'bold',
              border: 'none',
              color: '#fff',
            }}
          >
            <FontAwesomeIconElement
              icon={faSearch}
              onClick={handleWordSearch}
              title="Search word in dictionary"
            />
            <span className="sr-only">Search word in dictionary button</span>
          </button>

          <button
            style={{
              background: 'none',
              fontSize: 18,
              fontWeight: 'bold',
              border: 'none',
              color: '#fff',
            }}
          >
            <FontAwesomeIconElement
              icon={faPencilAlt}
              onClick={handleLessonNote}
              title="Create Lesson note"
            />
            <span className="sr-only">Create Lesson note button</span>
          </button>
        </span>
      </PopOver>
    );
  },
);

export default HighlightToolbar;
