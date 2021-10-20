import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem;
  text-align: center;
`;

export const Title = styled.div`
  text-align: center;
  padding: 1.8rem;
  h2 {
    color: #37474f;
    font-size: 22pt;
  }
`;

export const Grid = styled.div`
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: grid;
  text-align: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 4rem 4rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-columns: repeat(1, 1fr);
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
  min-height: 80px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.4rem 2.5rem;
  margin-bottom: 2rem;
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

  &:hover {
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

export const DocWrapper = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  padding-top: 2rem;
  height: 100%;

  @media (max-width: 960px) {
    font-size: 11pt;
  }

  @media (min-width: 960px) {
    display: flex;
    img {
      flex: 1;
    }
    div {
      flex: 4;
    }
  }

  h3 {
    color: #212121;
    text-align: left;
    font-size: 16pt;
  }

  p {
    text-align: left;
    color: #212121;
  }

  a {
    color: #212121;
  }
  img {
    margin-right: 2rem;
  }
  @media (max-width: 680px) {
    border-radius: 0;
    border: none;
  }
`;

export const PDFWrapper = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  // padding-top: 2rem;
  padding-bottom: 1rem;
  height: 100%;
  display: flex;

  h4 {
    color: #212121;
  }

  p {
    text-align: left;
    color: #212121;
  }

  a {
    color: #212121;
  }
  img {
    margin-right: 2rem;
  }
  @media (max-width: 680px) {
    border-radius: 0;
    border: none;
  }
`;
