import React from "react";
import { CardHolder, CardElement, FrontSide, BackSide } from "./FlipCard.css";
import ImageNumber1 from "./number_1.png";
import ImageNumber2 from "./number_2.png";
import ImageNumber3 from "./number_3.png";

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
            <FrontSide id={item._id} background={imagePath} />
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
