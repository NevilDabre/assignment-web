import React, { useState } from "react";
import FlipCard from "./FlipCard/FlipCard";
import Accordion from "./Accordion/Accordion";
import styled from "styled-components";
import VideoFrame from "./VideoFrame/VideoFrame";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import "./lesson.css";

import SpeechControl from "../SpeechControl/SpeechControl";
import TextSizeControl from "../TextSizeControl/TextSizeControl";

const ControlHolder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2em;
  font-family: "Martel Sans", sans-serif;
`;

const PostHeading = styled.div`
  width: 100%;
  margin: 2em;
  h1 {
    font-size: ${props => {
      console.log(props);
      return `${3 + props.textSize}em`;
    }};
    text-align: left;
    color: rgba(0, 0, 0, 0.84);
    line-height: 48px;
    font-weight: 400;
    word-wrap: wrap;
  }
`;

const PostSubHeading = styled.div`
  width: 100%;
  margin: 2em;
  h2 {
    font-variant: small-caps;
    font-weight: 400;
    font-size: ${props => `${1.5 + props.textSize}em`};
  }
`;

const PostBody = styled.div`
  font-size: ${props => `${1.2 + props.textSize}em`};
  margin-top: 0.5em;
`;

const ContentIntroduction = styled.div`
  margin: 2em;
`;

const ContentFlipCardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 320px) and (max-width: 480px) {
    background-color: royalblue;
    justify-content: center;
  }
`;

const ContentBody = styled.div`
  .header {
    margin: 2em;
  }
  .body {
    margin: 2em;
  }
  .content-footer {
    margin: 2em;
  }
`;

const LessonPost = () => {
  const [textSize, setTextSize] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleAccordionChange = index => {
    setSelectedImageIndex(index);
  };

  const handleTextSizeChanged = type => {
    if (type === "decrease") {
      setTextSize(textSize - 0.2);
    } else if (type === "increase") {
      setTextSize(textSize + 0.2);
    } else {
      setTextSize(0);
    }
  };

  return (
    <>
      <div className="card">
        <div className="thumbnail">
          <img
            src="https://signage.uiowa.edu/sites/signage.uiowa.edu/files/slides/biology_slide2.jpg"
            alt="biology"
            class="lesson-image"
          />
        </div>
        <ControlHolder>
          <SpeechControl />
          <TextSizeControl handleTextSizeChanged={handleTextSizeChanged} />
        </ControlHolder>
        <div className="body">
          <PostHeading textSize={textSize}>
            <h1>Introduction</h1>
          </PostHeading>
          <PostBody textSize={textSize}>
            <ContentIntroduction>
              The DNA double helix model was relatively simple and has
              revolutionized the study of biology and genetics. In order for the
              double helix model to explain the known facts about DNA, the
              model&#39;s chemical structure had to be able to explain three
              activities:
            </ContentIntroduction>
            <PostSubHeading>
              <h2>Activities</h2>
            </PostSubHeading>
            <ContentFlipCardHolder>
              <FlipCard
                data={[
                  {
                    _id: 1,
                    description: "replicate itself,"
                  },
                  {
                    _id: 2,
                    description:
                      "send instructions to the cell to enable it to manufacture proteins, and"
                  },
                  {
                    _id: 3,
                    description:
                      "change in a controlled manner in order for a species to survive in a changing environment (evolve)."
                  }
                ]}
              />
            </ContentFlipCardHolder>
            <ContentBody>
              <div className="header">
                Once the model was proposed, Watson and Crick and many others
                now turned to exploring how DNA went about carrying out these
                three functions.
              </div>
              <PostSubHeading>
                <h2>Functions</h2>
              </PostSubHeading>
              <div className="body">
                <Accordion
                  handleAccordionChange={handleAccordionChange}
                  data={[
                    {
                      _id: 1,
                      name: "Replication",
                      description:
                        "Replication of the DNA was relatively easy to demonstrate with the double helix."
                    },
                    {
                      _id: 2,
                      name: "Proteins",
                      description:
                        "They knew that proteins were the molecules that carried out the information required to properly construct the proteins, and that RNA copied and carried this genetic information to the sight of protein synthesis. This is the central dogma of life."
                    },
                    {
                      _id: 3,
                      name: "Mutations",
                      description:
                        "The role of mutations and how these mutations are incorporated into the DNA molecule and how these then affect the evolution, or slow change of the population of organisms over time, was the last function to be breached."
                    }
                  ]}
                />
              </div>
              <ImageCarousel selectedImageIndex={selectedImageIndex} />
              <div className="content-footer">
                <p>
                  The study of these three functions of DNA, sheds light on the
                  fundamentals of the manner in which living organisms maintain
                  life. This is one of the reasons why the discovery of the
                  structure of DNA by Watson, Crick and Wilkins had such a
                  significant effect in the world of molecular biology. This
                  work was important not only to get to the root of the basis of
                  life, but is also needed to give us better drugs to fight off
                  so many diseases, some of which are extremely debilitating and
                  lethal. Without knowledge of the structure of any of the
                  biomolecules, it would be a very difficult task to work on the
                  biochemistry of cellular reactions.
                </p>
                <p>
                  Determining the DNA structure paved the way for these kinds of
                  studies. It opened up the door to the world of microbiology,
                  helping us visualize life at a biochemical level, and making
                  us understand better how a cell functions.
                </p>
              </div>
            </ContentBody>
            <PostSubHeading>
              <h2>Extra resources</h2>
            </PostSubHeading>
            <VideoFrame youtubeId="4gFF1-VHHmk" />
          </PostBody>
        </div>
      </div>
    </>
  );
};

export default LessonPost;
