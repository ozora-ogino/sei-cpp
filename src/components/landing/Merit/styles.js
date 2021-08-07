import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  text-align: center;
  // width: 800px;
  height: 100%;
  display: table;
  margin: auto;
  @media (max-width: 960px) {
    margin: auto;
  }
`;


export const Title = styled.div`
padding-bottom: .3rem;
background: /* gradient can be an image */
  linear-gradient(
    to left,
    #2196f3, #e91e63
  )
  left
  bottom
  no-repeat;
background-size:100% 2px
`;

export const IntroWrapper = styled.div`
display: table-cell;
vertical-align: middle;
align-items: center;
  @media (max-width: 960px) {
  }
`;

export const Card = styled.div`
  background: #ffffff;
  height: 100%;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #2196f3, #e91e63);
  -webkit-box-shadow: 0px 3px 17px -2px rgba(0,0,0,0.13);
  border-radius: .3rem;
  padding: 2rem;
`;

export const Details = styled.div`
  // flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    // margin-bottom: 2rem;
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
    font-size: 24pt;
    text-align: center;
    // margin: 1rem;
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
    font-size: 14pt;
    font-weight: normal;
    color:  black ;
    // color:#7c7c7c ;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }

    @media (max-width: 680px) {
      font-size: 12pt;
    }
  }
`;