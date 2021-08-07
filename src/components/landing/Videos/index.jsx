import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 4rem;
  width: 98%;
  text-align: center;
  // max-width: 800px;
  margin: auto;
`;


export const Grid = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  grid-template-columns: ${({ len }) => `repeat(` + len + `, 1fr)`};
//   grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 2.2rem;
  margin-bottom: 1rem;


  iframe {
    width: 100%;
    //   width: 40rem;
      height: 20rem;
    // @media (max-width: 680px) {
    //   width: 20rem;
    //   height: 14rem;
    // }
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Videos = (props) => {
  return (
    <Wrapper>
      <h3>大学での講義の様子など</h3>
      <Grid len={props.data.length}>
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