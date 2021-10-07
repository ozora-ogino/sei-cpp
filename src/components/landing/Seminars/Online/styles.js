import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  text-align: left;
  margin: auto;

  @media (max-width: 680px) {
    text-align: center;
  }
`;

export const Content = styled.div`
  padding: 1.4rem 0;
  img {
    margin: 0;
    padding: 0;
    width: 20rem;
    @media (max-width: 680px) {
      width: 100%;
    }
  }
  h4 {
    @media (max-width: 680px) {
      margin-top: 1rem;
    }
    color: #212121;
    font-size: 1.4rem;
    padding-bottom: 1rem;
  }

  p {
    padding: 0.1rem;
    color: #707070;
  }
  min-height: 140px;
  h4 {
    color: #37474f;
  }
`;

export const DisplayHandler = styled.div`
  @media (min-width: 680px) {
    display: flex;
  }
`;

export const Button = styled.button`
  @media (max-width: 680px) {
    margin-top: 1rem;
  }
  cursor: pointer;
  border-radius: 3px;
  padding: 0.4rem 2.5rem;
  margin-top: 3rem;
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

export const Long = styled.div`
  text-align: center;
  margin-top: 3rem;
`;
