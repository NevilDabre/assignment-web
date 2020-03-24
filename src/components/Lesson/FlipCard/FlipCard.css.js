import styled from "styled-components";
import Number1 from "./number_1.png";
import Number2 from "./number_2.png";
import Number3 from "./number_3.png";

export const CardHolder = styled.div`
  width: 170px;
  height: 220px;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 30px;
  margin: 15px;
`;

export const CardElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  &:hover {
    transform: rotateY(180deg);
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
  background-size: 100% 100%;
  border-radius: 30px;
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
  font-weight: 400;

  p {
    padding: 15px;
  }
`;
