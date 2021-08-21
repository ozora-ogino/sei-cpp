import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  text-align: center;
  max-width: 700px;
  margin: auto;

  @media (max-width: 1260px) {
    max-width: 500px;
    padding-bottom: 2rem;
  }
  }
`;

export const Content = styled.div`
  // padding: 1.4rem 0;
  height: 500px;
  padding-bottom: 3rem;
  min-height: 140px;
  @media (max-width: 440px) {
    height: 420px;
  }
  @media (min-width: 1940px) {
    height: 620px;
  }

  img {
    width: 100%;
    object-fit: cover;
    // border-radius: .6rem  .6rem 0 0;
    transition-duration: 0.5s;


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

  h4 {
    color: #37474f;
  }
`;