import styled from "styled-components";

const MainButtonElement = styled.a`
  color: #fff;
  padding: 15px 25px;
  background: #ed2553;
  border-radius: 50px;

  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
  }
`;

export default MainButtonElement;