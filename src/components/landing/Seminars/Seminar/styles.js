import styled from 'styled-components';

export const Root = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  text-align: center;
  max-width: 700px;
  margin: auto;
`;

export const Content = styled.div`
  // padding: 1.4rem 0;
  padding-bottom: 2rem;
  img {
    width: 100%;
    // border-radius: .6rem  .6rem 0 0;
    transition-duration: 0.5s;
  }

  img:hover{
    transform: scale(1.05);
    transition-duration: 0.5s;
  }

  h4 {
    color: #212121;
    font-size: 1.4rem;
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

export const Long = styled.div`
  text-align: center;
  margin-top: 3rem;
`;