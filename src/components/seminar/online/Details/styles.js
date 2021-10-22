import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 800px;
  width: 90%;
  margin: auto;
  text-align: center;
`;

export const CardWrapper = styled.div`
  margin: 2rem;
  p {
    margin: 0.2rem;
    padding: 0;
  }
  img {
    margin: 0;
    padding: 0;
    border-radius: 2rem;
  }
`;

export const PersonInlineBlock = styled.div`
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  img {
    height: 120px;
    border-radius: 50%;
    @media (max-width: 680px) {
      height: 80px;
    }
  }
`;

export const PDFInlineBlock = styled.div`
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  img {
    height: 200px;
    margin: auto;
    margin-left: 4rem;
    border-radius: 0.6rem;
    @media (max-width: 680px) {
      height: 140px;
    }
  }
`;
