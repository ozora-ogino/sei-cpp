import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import { Seminar } from './Seminar';
import { Online } from './Online';

const Wrapper = styled.div`
  @media (min-width: 961px) {
      display: flex
  }
  @media (max-width: 960px) {
  }
`;

export const Seminars = (props) => {
    return (
        <div style={{ borderTop: '0.1px solid #dddddd', paddingTop: '4rem' }}>
            <Fade left>
                <Wrapper >
                    <div style={{ flex: 2 }}>
                        <Seminar data={props.long} />
                    </div>
                    <div style={{ flex: 1 }} />
                </Wrapper>
            </Fade>
            <Fade right>
                <Wrapper >
                    <div style={{ flex: 1 }} />
                    <div style={{ flex: 2 }}>
                        <Seminar data={props.short} />
                    </div>
                </Wrapper>
            </Fade>
            <Fade left>
                <Wrapper >
                    <div style={{ flex: 2 }}>
                        <Seminar data={props.online} />
                    </div>
                    <div style={{ flex: 1 }} />
                </Wrapper>
                {/* <Online data={props.online} /> */}
            </Fade>
        </div >
    );
}
