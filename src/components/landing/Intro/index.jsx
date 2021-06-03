import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'components/theme';
import { Container, Button, Card } from 'components/common';
import { Thumbnail } from 'components/landing';
import { Wrapper, IntroWrapper, Details } from './styles';
// import agile from 'assets/illustrations/agile.png'
import ba from 'assets/illustrations/ba.png'


export const Intro = () => {

  return (
    <Wrapper >
      <IntroWrapper as={Container}>
        <Details>
          <Card pad='3rem 1rem 2rem 1rem'>
            <p>我々は<span style={{ color: '#2196f3', fontSize: '1.5rem' }}>
              Global</span>で<span style={{ color: '#00acc1', fontSize: '1.5rem' }}>Creative</span>
            な人材の育成をサポートしています。
          </p>
            <ul className='top-banner'>
              {/* <li><img src={agile} /></li> */}
              <li><img src={ba} /></li>
            </ul>
            <p>カルフォルニアでBAやAgileを学んでみませんか？</p>
            {/* <Link to={'/contact'}><Button>お問い合わせ</Button></Link> */}
          </Card>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
