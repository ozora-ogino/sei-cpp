import React from 'react';
import { Container } from 'components/common';
import styled from 'styled-components';

export const Targets = (props) => {
  const Wrapper = styled.div`
  color: white;
  text-align: center;
  padding-bottom: 2rem;
  img {
    width: 80%;
    max-width: 420px;
  }

  @media (min-width: 960px) {
    padding: 4rem;
    display: flex;
    img {
      vertical-align: middle;
      margin: 0 auto;
      padding: 0
      width: 400px;
    }
    .flex-item {
      margin-top: 20px;
      height: 100%;
      text-align: left;
      vertical-align: middle;
      height: 100%;
      margin: auto;
    }
  }
`;

  return (
    <div style={{ background: 'var(--primary)' }}>
      <Wrapper as={Container}>
        <img src={props.img} />
        <div className='flex-item'>
          <h3>{props.title}</h3>
          {props.data.map((item) => {
            return <p>{item}</p>
          })}
        </div>
      </Wrapper>
    </div>
  )
}
