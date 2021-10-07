import styled from "styled-components";

export const Root = styled.div`
  // background: var(--primary);
  background: white;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: table;
  text-align: center;
  margin: auto;
  @media (max-width: 960px) {
    margin: 0.4rem;
  }
`;

export const IntroWrapper = styled.div`
  width: 100%;
  // padding-top: 6rem;
  display: table-cell;
  padding-right: 0;
  margin-right: 0;
  align-items: center;
  vertical-align: middle;
  width: 1000px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  // flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    text-align: center;
    color: #00e676;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }

    @media (max-width: 680px) {
      margin-bottom: 1rem;
      font-size: 20pt;
    }
  }

  h2 {
    font-size: 30pt;
    text-align: center;
    color: white;
    margin: 1rem;
    // background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;

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
    color: #373737;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }

    @media (max-width: 680px) {
      font-size: 16pt;
    }
  }

  p {
    margin: 1rem;
    color: black;
    font-size: 14pt;
    font-weight: normal;
    color: #7c7c7c;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }

    @media (max-width: 680px) {
      font-size: 12pt;
    }
  }

  .top-banner {
    margin: auto;
    margin-top: 1.4rem;
    width: 90%;
    max-width: 600px;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
  }
  .top-banner li {
    width: calc(100% / 2);
    vertical-align: middle;
    box-sizing: border-box;
    margin: auto;
  }
  .top-banner li img {
    max-width: 100%;
    height: auto;
  }
`;

export const AboutUs = styled.div`
  @media (min-width: 680px) {
    display: flex;
    margin: auto;
    justify-content: middle;
    .right {
      flex: 1;
    }
    .left {
      flex: 2;
      height: 100%;
      margin: auto;
      padding-left: 2rem;
      text-align: left;
      justify-content: middle;
    }

    h2 {
      color: black;
      text-align: left;
    }
  }

  @media (max-width: 681px) {
    h2 {
      color: black;
    }
    p {
      text-align: left;
    }
    .right {
      display: none;
    }
    .left {
      height: 100%;
      margin: auto;
      justify-content: middle;
      border: 1.8px solid var(--primary);
      border-radius: 5px;
    }
    margin-bottom: 1rem;
  }
`;
