import styled from 'styled-components';

export const Top = styled.div`
`;

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  padding-top: 3rem;
`;

export const Title = styled.div`
  text-align: center;
  padding: 1.8rem;
  h2 {
    color: #37474f;
    font-size: 22pt,
  }
`;

export const Grid = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 8fr;
  gap: 4.0rem 1.0rem;
  margin-bottom: 1rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  // overflow: hidden;
  // box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.11);

  @media (max-width: 680px) {
    overflow: hidden;
    box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.11);
  }

  h4 {
    color: #424242;
  }

  p {
    color: #424242;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
  padding-bottom: 0;
  min-height: 80px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.4rem 2.5rem;
  // margin-top: 2rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #007fed;

  &:focus {
    outline: none;
  }

  &:hover{
    padding: 0.4rem 2.8rem;
    background: #0089ff;
    transition: 0.1s ease-in;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;


export const Card = styled.div`
  padding-top: 1rem;
  background: #ffffff;
  height: 100%;
  border: solid 1px #cfd8dc;
  border-radius: .3rem;

  h4 {
    color: #212121;
    font-size: 1.2rem;
  }

  p {
    color: #212121;
    margin-bottom: 0;
  }
  
  a {
    color: #212121;
  }

  @media (max-width: 680px) {
    border-radius: 0;
    border: none;
  }
`;