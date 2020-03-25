import React from "react";
import ImageNumber1 from "./number_1.png";
import ImageNumber2 from "./number_2.png";
import ImageNumber3 from "./number_3.png";
import styled from "styled-components";

const CardImage = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 10px;
  img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.card_title {
  text-align: center;
  font-size: 30px;
  margin-top: -80px;
  height: 40px;
  color: #fff;
}



`;

export const CardHolder = styled.div`
  width: 170px;
  height: 220px;
  border-radius: 10px;
  margin: 15px;

    .hidden-content{
    height: 1px;
    margin: -1px;
    overflow:hidden;
    padding:0;
    position: absolute;
    width: 1px;
    border: 0;
    clip: rect(0 0 0 0)
  }
`;

export const CardElement = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(-180deg);
  }
`;

export const FrontSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${props => `url(${props.background})`};
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const BackSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 12px;
  p {
    padding: 15px;
  }
`;


const FlipCard = ({ data }) => {
  const elements =
    data &&
    data.map(item => {
      const imagePath =
        item._id === 1
          ? ImageNumber1
          : item._id === 2
          ? ImageNumber2
          : ImageNumber3;
      return (
        <CardHolder>
          <CardElement>
            <FrontSide id={item._id} background={imagePath}>
              <CardImage>
    <img src="https://cdn.pixabay.com/photo/2016/12/13/05/28/dna-1903319__340.jpg" aria-details={`dna-activity-${item._id}`} alt=""/> 
      <div className="card_title">
    <p>{item._id}</p>
  </div></CardImage>
  <p className="hidden-content" id={`dna-activity-${item._id}`}>
  {item.description}
  </p>
            </FrontSide>
            <BackSide>
              <p>{item.description}</p>
            </BackSide>
          </CardElement>
        </CardHolder>
      );
    });
  return <>{elements}</>;
};

export default FlipCard;
