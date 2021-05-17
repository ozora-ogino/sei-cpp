import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
`;

export const Title = styled.div`
  text-align: center;
  padding-bottom: 1.4rem;
  h2 {
    font-size: 22pt,
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  // grid-template-columns: ${({ len }) => `repeat(` + len + `, 1fr)`};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
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
    color: #212121;
    font-size: 1.5rem;
  }

  p {
    padding: 0.1rem;
    color: #707070;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
  min-height: 140px;
  h4 {
    color: #37474f;
  }
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

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;