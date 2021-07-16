import React from 'react';
import { Container, Card } from 'components/common';
import { Root, Wrapper, IntroWrapper, Details } from './styles';
import { Slider } from './Slider';
// import nasacpp from 'assets/company-logos/nasa-cpp.png'
// import agile from 'assets/illustrations/agile.png'
import ba from 'assets/illustrations/ba.png'


export const Intro = () => {
  return (
    <Root>
      <Wrapper >
        <IntroWrapper as={Container}>
          <Details>
            <Card pad='3rem 1rem 2rem 1rem'>
              <p style={{ color: 'black', marginBottom: '3rem' }}>
                <span style={{ fontSize: '1.4rem' }}>
                  <span style={{ color: '#004ba0', fontWeight: 'bold' }}>NASA</span>と<span style={{ color: '#00701a', fontWeight: 'bold' }}>カリフォルニア州立工科大学</span>
                  が共同で行うプロジェクト
                </span>
              </p>
              <ul className='top-banner'>
                <Slider />
              </ul>
              {/* <p style={{ paddingTop: '4rem' }}>カルフォルニアでBAやAgileを学んでみませんか？</p> */}
              <p style={{ paddingTop: '4rem', color: 'black' }}>
                <span style={{ color: '#2196f3', fontSize: '2.0rem' }}>
                  Global</span>で<span style={{ color: '#00acc1', fontSize: '2.0rem' }}>Creative</span>
                な人材の育成をサポートします
              </p>
            </Card>
          </Details>
        </IntroWrapper>
      </Wrapper>
    </Root>
  );
};
