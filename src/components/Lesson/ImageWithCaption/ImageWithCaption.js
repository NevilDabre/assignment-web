import React from "react";
import styled from "styled-components";

const FigureElemnt = styled.figure`
  border: thin #c0c0c0 solid;
  display: flex;
  flex-flow: column;
  padding: 5px;
  margin: auto;
`;

const ImageElement = styled.img`
  min-height: 100%;
  min-width: 100%;
`;

const FigcaptionElement = styled.figcaption`
  font: "italic smaller sans-serif";
  padding: 3px;
  text-align: center;
`;

const ImageWithCaption = () => {
  return (
    <div>
      <FigureElemnt>
        <ImageElement
          alt="Watson and Crick DNA Model"
          style={{ borderRadius: "25px" }}
          src="https://ichef.bbci.co.uk/images/ic/448xn/p071f6xk.jpg"
          width="100%"
          height="100%"
        />
        <FigcaptionElement>Watson and Crick DNA Model</FigcaptionElement>
      </FigureElemnt>
    </div>
  );
};

export default ImageWithCaption;
