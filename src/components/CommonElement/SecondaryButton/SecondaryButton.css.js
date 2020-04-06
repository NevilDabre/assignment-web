import styled from 'styled-components';

const SecondaryButtonElement = styled.a`
padding: 5px 20px;
background: #ed2553;
border-radius: 50px;
  color: ${(props) =>
    props.theme.palette.type === 'light'
      ? props.theme.palette.common.white
      : props.theme.palette.common.black};

  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
  }
`;

export default SecondaryButtonElement;
