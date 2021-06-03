import styled from 'styled-components';

export const Card = styled.div`
  // padding: 1rem;
  padding: ${({ pad }) => (pad != undefined ? pad : '1rem')};
  margin: ${({ margin }) => (margin != undefined ? margin : '0')};
  background: #ffffff;
  height: 100%;
  // border: solid 1px #cfd8dc;
  -webkit-box-shadow: 0px 3px 17px -2px rgba(0,0,0,0.13);
  box-shadow: 0px 1px 13px -3px rgba(0,0,0,0.1);
  border-radius: ${({ radius }) => (radius != undefined ? radius : '.3rem')};
`;
