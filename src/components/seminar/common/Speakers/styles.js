import styled from 'styled-components';

export const Top = styled.div``;

export const Wrapper = styled.div`
  padding-bottom: 4rem;
`;

export const Title = styled.div`
  text-align: center;
  padding: 1.8rem;
  h2 {
    // color: #37474f;
    color: white;
    font-size: 20pt;
  }
`;

export const Grid = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 8fr;
  gap: 4rem 1rem;
  margin-bottom: 1rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  // display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 80px;

  img {
    width: 10rem;
  }
`;

export const Texts = styled.div`
  width: 100%;
  height: 100%;

  h4 {
    color: #333333;
    margin: 0;
  }

  p {
    color: #333333;
    margin: 0;
    margin-top: 0.7rem;
  }
`;
