import styled from "styled-components";

export const Top = styled.div`
  // background: var(--primary);
`;

export const Wrapper = styled.div`
  padding-bottom: 4rem;
`;

export const Title = styled.div`
  text-align: center;
  padding: 1.8rem;
  h2 {
    color: #37474f;
    // color: white;
    font-size: 24pt;
    media (max-width: 680px) {
      font-size: 20pt;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  // grid-template-columns: ${({ len }) => `repeat(` + len + `, 1fr)`};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;
  margin-bottom: 1rem;

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

  // @media (max-width: 680px) {
  //   overflow: hidden;
  //   box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.11);
  // }

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
  // background: #007fed;
  background: var(--secondary);

  &:focus {
    outline: none;
  }

  &:hover {
    // padding: 0.4rem 2.8rem;
    // background: #0089ff;
    background: var(--secondary-dark);
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
