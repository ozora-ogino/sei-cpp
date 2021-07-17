import React from 'react';
import { Container } from 'components/common';
import styled from 'styled-components';
import teachersImg from 'assets/illustrations/teachers.svg'

export const TeachersIntro = (props) => {
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
        <img src={teachersImg} width='30%' style={{ flex: 1, margin: 'auto', textAlign: 'center' }} />
        <div style={{ flex: 2, justifyContent: 'center', margin: 'auto', textAlign: 'left' }}>
          <p>CPPセミナーではカリフォルニアの企業のエキスパート、Cal Polyの教授を講師として迎え入れています。</p>
          <p>一部実際の教師陣をご紹介します。</p>
          <p></p>
        </div>
      </Wrapper>
      <div>
        {props.children}
      </div>
    </div>

  )
}
