import React from 'react';
import styled from 'styled-components';

import { Seminar } from './Seminar';

const Root = styled.div`
//   background: var(--primary);
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
      display: flex
  }
  @media (max-width: 1260px) {
  }
`;

export const Seminars = (props) => {
    return (
        <Root>
            <Wrapper >
                <div className='item'>
                    <Seminar data={props.online} />
                </div>
                <div className='item'>
                    <Seminar data={props.long} />
                </div>
                <div className='item'>
                    <Seminar data={props.short} />
                </div>
            </Wrapper>
            {/* <Online data={props.online} /> */}
        </Root>
    );
}
