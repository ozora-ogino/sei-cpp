import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 4rem;
  text-align: center;
  max-width: 800px;
  margin: auto;
`;


export const Grid = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  grid-template-columns: ${({ len }) => `repeat(` + len + `, 1fr)`};
//   grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;
  margin-bottom: 1rem;


  iframe {
      width: 40rem;
      height: 24rem;
    @media (max-width: 680px) {
      width: 20rem;
      height: 14rem;
    }
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Videos = (props) => {
  return (
    <Wrapper>
      <h3>大学での講義の様子</h3>
      <Grid len={props.length}>
        {props.data.map((video) => {
          return <Video url={video} />
        })}
      </Grid>
    </Wrapper>
  )
}

const Video = (props) => {
  return (
    <div>
      <iframe src={props.url} />
    </div>
  )
}