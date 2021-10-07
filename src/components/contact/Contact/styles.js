import styled from "styled-components";

export const Wrapper = styled.div`
  // padding-bottom: 4rem;
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const IntroWrapper = styled.div`
  padding-top: 4rem;
  align-items: center;
  content-align: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  max-width: 800px;
  margin: auto;
  label,
  input,
  textarea {
    display: block;
    width: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0.3em;
  }

  span {
    font-weight: 700;
    color: #373737;
    // color: #102a43;
    line-height: 35px;
    line-height: 2.5rem;
    font-size: 12px;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  input[type="submit"] {
    background: var(--secondary);
    // background: #fc4366;
    // background: #fc4366;
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
    border-radius: 5px;
    margin-top: 1.3em;
    border: 0px solid #6c63ff;
  }

  .container {
    width: 460px;
    margin: 5em auto;
  }
  form {
    background: #ffffff;
    // background-color: #ffffff;
    padding-top: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    padding-left: 40px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    box-shadow: ;
    border-radius: 3px;
    overflow: hidden;
  }

  .required-star {
    color: #fc4366;
  }

  input,
  textarea {
    width: 100%;
    padding: 9px 20px;
    border: 1px solid #e1e2eb;
    background: #ffffff;
    color: #373737;
    caret-color: #829ab1;
    box-sizing: border-box;
    font-size: 14px;
    font-size: 1rem;
    line-height: 29px;
    line-height: 2rem;
    box-shadow: inset 0 2px 4px 0 rgba(206, 209, 224, 0.2);
    box-shadow: inset 0 2px 4px 0 rgba(206, 209, 224, 0.2);
    border-radius: 3px;
    line-height: 29px;
    line-height: 2rem;
  }

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
    font-size: "16pt";
    color: #373737;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }

    @media (max-width: 680px) {
      font-size: 16pt;
    }
  }

  h4 {
    font-size: 12pt;
    padding-bottom: 0.2rem;
    color: #373737;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }

    @media (max-width: 680px) {
      font-size: 12pt;
    }
  }

  p {
    margin-bottom: 0rem;
    // font-size: 14pt;
    font-size: 12pt;
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
