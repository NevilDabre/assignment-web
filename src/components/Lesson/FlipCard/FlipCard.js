import React from "react";
import { CardHolder, CardElement, FrontSide, BackSide } from "./FlipCard.css";

const FlipCard = ({ data }) => {
  const elements =
    data &&
    data.map(item => {
      return (
        <CardHolder>
          <CardElement>
            <FrontSide id={item._id} />
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
