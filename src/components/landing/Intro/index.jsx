import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import { Wrapper, IntroWrapper, Details, Cover, Card } from './styles';
import cpp from 'assets/illustrations/cpp.jpg'
import agile from 'assets/illustrations/agile.png'
import ba from 'assets/illustrations/ba.png'
import la from 'assets/illustrations/la.jpg'


export const Intro = () => {

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <Cover>
            <div className='cov'>
              <img src={la} width='1000rem' />
              {/* <img src={cpp} width='1000rem'/> */}
              <h2>Make Your Business Faster</h2>
            </div>
          </Cover>
          <Card>
            <h3>我々は<span style={{ color: '#2196f3', fontSize: '2rem' }}>Global</span>で<span style={{ color: '#00acc1', fontSize: '2rem' }}>Creative</span>な人材の育成をサポートしています。</h3>
            <ul className='top-banner'>
              <li><img src={agile} /></li>
              <li><img src={ba} /></li>
            </ul>
            <h3>カルフォルニアでBAやAgileを学んでみませんか？</h3>
            <Link to={'/contact'}><Button>お問い合わせ</Button></Link>
          </Card>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
