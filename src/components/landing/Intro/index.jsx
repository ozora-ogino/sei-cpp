import React from 'react';
import { Container, Card } from 'components/common';
import { Wrapper, IntroWrapper, Details } from './styles';
import { Slider } from './Slider';
// import nasacpp from 'assets/company-logos/nasa-cpp.png'
// import agile from 'assets/illustrations/agile.png'
import ba from 'assets/illustrations/ba.png'


export const Intro = () => {
  return (
    <Wrapper >
      <IntroWrapper as={Container}>
        <Details>
          <Card pad='3rem 1rem 2rem 1rem'>
            <p style={{ marginBottom: '3rem' }}>我々はNASAとカリフォルニア州立工科大学と共同で<span style={{ color: '#2196f3', fontSize: '1.5rem' }}>
              Global</span>で<span style={{ color: '#00acc1', fontSize: '1.5rem' }}>Creative</span>
            な人材の育成をサポートしています。
          </p>
            <ul className='top-banner'>
              {/* <li><img src={agile} /></li> */}
              {/* <li><img src={ba} /></li> */}
              <Slider />
            </ul>
            <p style={{ paddingTop: '4rem' }}>カルフォルニアでBAやAgileを学んでみませんか？</p>
            {/* <Link to={'/contact'}><Button>お問い合わせ</Button></Link> */}
          </Card>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
