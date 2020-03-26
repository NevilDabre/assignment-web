import React from 'react';
import styled from 'styled-components';
import { useSpeechSynthesis } from 'react-speech-kit';
import PropTypes from 'prop-types';
import IconButton from '../../CommonElement/IconButton/IconButton';

const text = `Introduction
The DNA double helix model was relatively simple and has revolutionized the study of biology and genetics. In order for the double helix model to explain the known facts about DNA, the model's chemical structure had to be able to explain three activities: 
replicate itself, 
send instructions to the cell to enable it to manufacture proteins, and 
change in a controlled manner in order for a species to survive in a changing environment (evolve). 
Once the model was proposed, Watson and Crick and many others now turned to exploring how DNA went about carrying out these three functions. 
Replication of the DNA was relatively easy to demonstrate with the double helix. 
They knew that proteins were the molecules that carried out day-to-day chores of the cell. Thus, they knew that DNA carried the information required to properly construct the proteins, and that RNA copied and carried this genetic information to the sight of protein synthesis. This is the central dogma of life. 
The role of mutations and how these mutations are incorporated into the DNA molecule and how these then affect the evolution, or slow change of the population of organisms over time, was the last function to be breached.
The study of these three functions of DNA, sheds light on the fundamentals of the manner in which living organisms maintain life. This is one of the reasons why the discovery of the structure of DNA by Watson, Crick and Wilkins had such a significant effect in the world of molecular biology. This work was important not only to get to the root of the basis of life, but is also needed to give us better drugs to fight off so many diseases, some of which are extremely debilitating and lethal. Without knowledge of the structure of any of the biomolecules, it would be a very difficult task to work on the biochemistry of cellular reactions. Determining the DNA structure paved the way for these kinds of studies. It opened up the door to the world of microbiology, helping us visualize life at a biochemical level, and making us understand better how a cell functions.`;

const SpeechControlHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;

const SpeechControl = ({ textContent }) => {
  const { speak, cancel, speaking } = useSpeechSynthesis();

  return (
    <SpeechControlHolder>
      <h3>Listen:</h3>
      <div>
        {!speaking && (
          <IconButton
            handleOnClick={() => speak({ text: textContent || text })}
            iconName="faPlay"
            title="Play button for text to speech"
            srText="Play button for text to speech"
          />
        )}
        {speaking && (
          <IconButton
            handleOnClick={cancel}
            iconName="faPause"
            title="Pause button for text to speech"
            srText="Pause button for text to speech"
          />
        )}
      </div>
      <div>
        <IconButton
          handleOnClick={cancel}
          iconName="faStop"
          title="Stop button for text to speech"
          srText="Stop button for text to speech"
        />
      </div>
    </SpeechControlHolder>
  );
};

export default SpeechControl;

SpeechControl.propTypes = {
  textContent: PropTypes.string,
};
