import styled from 'styled-components';

export const Wrapper = styled.div`
  border-top: 0.1px solid #dddddd;
  // border-bottom: 0.1px solid #dddddd;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
  @media (max-width: 960px) {
    padding-bottom: 2rem;
    flex-direction: column;
`;

export const IntroWrapper = styled.div`
  padding-top: 4rem;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

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

  h2 {
    margin-bottom: 2rem;
    font-size: 24pt;
    color: #373737;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }

    @media (max-width: 680px) {
      font-size: 20pt;
    }
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 20pt;
    font-weight: normal;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }

    @media (max-width: 680px) {
      font-size: 16pt;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;

export const LogoList = styled.div`
  padding-top: 1rem;
  height: 100%;
  vertical-align: middle;
  align-items: center;
`;

export const Logo = styled.div`
  padding: 1rem;
  display: inline-block; 
  margin: auto;
  vertical-align: middle;
`;