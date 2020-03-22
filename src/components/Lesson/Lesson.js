import React from "react";
import FlipCard from "./FlipCard/FlipCard";
import Accordion from "./Accordion/Accordion";
import styled from "styled-components";
import VideoFrame from "./VideoFrame/VideoFrame";
import ImageWithCaption from "./ImageWithCaption/ImageWithCaption";

const PostHeading = styled.div`
  width: 100%;
  h1 {
    font-family: Georgia, serif;
    color: #ed2553;
    font-variant: small-caps;
    text-transform: none;
    font-weight: 500;
    font-size: ${props => `${3 + props.textSize}em`};
  }
`;

const PostSubHeading = styled.div`
  width: 100%;
  h2 {
    font-family: Georgia, serif;
    color: #ed2553;
    font-variant: small-caps;
    font-weight: 300;
    font-size: ${props => `${1.5 + props.textSize}em`};
  }
`;

const PostBody = styled.div`
  font-family: "Helvetica Neue", "Lucida Grande", Helvetica, Arial, Verdana,
    sans-serif;
  font-size: ${props => `${1.5 + props.textSize}em`};
  margin-top: 0.5em;
`;

const ContentIntroduction = styled.div``;

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
  }
  .body {
  }
  .footer {
    margin-top: 20px;
  }
`;

const LessonPost = ({ textSize }) => {
  return (
    <>
      <PostHeading textSize={textSize}>
        <h1>Introduction</h1>
      </PostHeading>
      <PostBody>
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
            Once the model was proposed, Watson and Crick and many others now
            turned to exploring how DNA went about carrying out these three
            functions.
          </div>
          <PostSubHeading>
            <h2>Functions</h2>
          </PostSubHeading>
          <div className="body">
            <Accordion
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
          <ImageWithCaption />
          <div className="footer">
            <p>
              The study of these three functions of DNA, sheds light on the
              fundamentals of the manner in which living organisms maintain
              life. This is one of the reasons why the discovery of the
              structure of DNA by Watson, Crick and Wilkins had such a
              significant effect in the world of molecular biology. This work
              was important not only to get to the root of the basis of life,
              but is also needed to give us better drugs to fight off so many
              diseases, some of which are extremely debilitating and lethal.
              Without knowledge of the structure of any of the biomolecules, it
              would be a very difficult task to work on the biochemistry of
              cellular reactions.
            </p>
            <p>
              Determining the DNA structure paved the way for these kinds of
              studies. It opened up the door to the world of microbiology,
              helping us visualize life at a biochemical level, and making us
              understand better how a cell functions.
            </p>
          </div>
        </ContentBody>
        <PostSubHeading>
          <h2>Extra resources</h2>
        </PostSubHeading>
        <VideoFrame youtubeId="4gFF1-VHHmk" />
      </PostBody>
    </>
  );
};

export default LessonPost;
