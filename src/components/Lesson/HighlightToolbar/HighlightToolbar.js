import React, { useState, useEffect, forwardRef } from "react";
import PopOver from "react-text-selection-popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStop,
  faPencilAlt,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useSpeechSynthesis } from "react-speech-kit";
import "./highlighttoolbar.css";
import { color } from "@material-ui/system";

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
      
      lessonNoteRef.current.checkHandle(selectedText);
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
      window.addEventListener("mouseup", handleTextSelected);
    }, []);

    useEffect(() => {
      return () => {
        window.removeEventListener("mouseup", handleTextSelected);
      };
    }, []);

    return (
      <PopOver selectionRef={ref}>
        <span class="tooltiptext tooltip-control-holder">
          {!speaking && (
            <button
              style={{
                background: "none",
                fontSize: 18,
                fontWeight: "bold",
                border: "none",
                color: "#fff"
              }}
            >
              <FontAwesomeIconElement
                onClick={() => {
                  handleStartSpeech();
                }}
                icon={faPlay}
              />
            </button>
          )}
          {speaking && (
            <button
              style={{
                background: "none",
                fontSize: 18,
                fontWeight: "bold",
                border: "none",
                color: "#fff"
              }}
            >
              <FontAwesomeIconElement onClick={cancel} icon={faStop} />
            </button>
          )}

          <button
            style={{
              background: "none",
              fontSize: 18,
              fontWeight: "bold",
              border: "none",
              color: "#fff"
            }}
          >
            <FontAwesomeIconElement
              icon={faSearch}
              onClick={handleWordSearch}
            />
          </button>

          <button
            style={{
              background: "none",
              fontSize: 18,
              fontWeight: "bold",
              border: "none",
              color: "#fff"
            }}
          >
            <FontAwesomeIconElement
              icon={faPencilAlt}
              onClick={handleLessonNote}
            />
          </button>
        </span>
      </PopOver>
    );
  }
);

export default HighlightToolbar;
