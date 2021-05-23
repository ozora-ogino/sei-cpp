import styled from 'styled-components';

export const Wrapper = styled.div`
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
  text-align: center;
`;

export const Cover = styled.div`
  padding-bottom: 1rem;
  .cov{
    position: relative;
  // h2 {
  //   position: absolute:
  //   left: 5rem;
  //   top: 6rem;
  // }
  }
  .cov h2 {
  position: absolute;
    width: 100%;
    left: 0; 
    top: calc(50% - 25px); 
    text-align: center; 
    font-weight: bold; 
    font-size: 50px;
  @media (max-width: 960px) {
    font-size: 30px;
  }
  @media (max-width: 680px) {
    font-size: 18px;
  }
}
`;


export const IntroWrapper = styled.div`
  padding-top: 4rem;
  align-items: center;
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
    margin-bottom: 1rem;
    font-size: 14pt;
    font-weight: normal;
    color:#7c7c7c ;

    @media (max-width: 960px) {
      mix-blend-mode: unset;
    }

    @media (max-width: 680px) {
      font-size: 12pt;
    }
  }

  .top-banner{
    margin: auto;
    width: 60%;
    display: flex;
    list-style: none;
    flex-wrap:wrap;
  }
  .top-banner li {
    width: calc(100%/2);
    vertical-align: middle;
    box-sizing:border-box;
    margin: auto;
  }
  .top-banner li img {
    max-width:100%;
    height: auto;
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
