import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding: 8rem 0;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 22pt;
    color: #00e676;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }

    @media (max-width: 680px) {
      font-size: 20pt;
    }
  }

  h3 {
    margin-top: 3rem;
    font-size: 20pt;
    font-weight: bold;
    color: #373737;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }

    @media (max-width: 680px) {
      font-size: 16pt;
    }
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 14pt;
    font-weight: normal;
    color: #373737;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }

    @media (max-width: 680px) {
      font-size: 12pt;
    }
  }
`;