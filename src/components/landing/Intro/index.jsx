import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'components/theme';
import { Container, Button, Card } from 'components/common';
import { Wrapper, IntroWrapper, Details, Cover } from './styles';
import agile from 'assets/illustrations/agile.png'
import ba from 'assets/illustrations/ba.png'
import top from 'assets/illustrations/topcover.png'


export const Intro = () => {

  return (
    <Wrapper >
      <Header />
      <Cover>
        <div className='cov'>
          <img src={top} />
          <div className='top-letter'>
            <div className='letter-h2'>
              <h2>現役プロフェッショナルが教える</h2>
              <h2>シリコンパレー式ビジネス革新</h2>
            </div>
            <Link to={'/contact'}><Button>お問い合わせ</Button></Link>
          </div>
        </div>
      </Cover>
      <IntroWrapper as={Container}>
        <Details>
          <Card pad='3rem 0 0 0'>
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
