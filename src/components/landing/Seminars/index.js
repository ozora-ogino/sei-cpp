import React from 'react';
import styled from 'styled-components';

import { Seminar } from './Seminar';

const Root = styled.div`
  //   background: var(--secondary-bg);
  // border-top: 0.1px solid #dddddd;
  padding-top: 5rem;
  padding-bottom: 2rem;
  margin: auto;
`;

const Wrapper = styled.div`
  .item {
    flex: 1;
  }

  @media (min-width: 1261px) {
    display: flex;
  }
  @media (max-width: 1260px) {
  }
`;

export const Seminars = ({ online, long, short }) => (
  <Root>
    <Wrapper>
      {[online, long, short].map(d => (
        <div className="item">
          <Seminar data={d} />
        </div>
      ))}
    </Wrapper>
  </Root>
);
