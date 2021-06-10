import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import { Thumbnail } from 'components/landing';
import { Wrapper, IntroWrapper, Details, Title, Card } from './styles';
import agile from 'assets/illustrations/agile.png'
import ba from 'assets/illustrations/ba.png'
import styled from 'styled-components';





export const Merit = () => {

  return (
    <Wrapper >
      <IntroWrapper as={Container}>
        <Details>
          <Card>
            <Title>
              <h3>メリット</h3>
            </Title>
            <ul className='top-banner'>
            </ul>
            <div style={{ margin: '1.8rem auto auto auto', textAlign: 'center' }}>
              <h3 style={{ display: 'inline-block', textAlign: 'left', lineHeight: '4rem', fontSize: '20px' }}>
                1. 自社の文化に沿ったDXのできる人材を作り出す
                <br />2. カリフォルニアで働くプロフェッショナルとの交流
                <br />3. NASAとCalPolyの共同プログラムに参加できる
                </h3>
            </div>
            {/* <Link to={'/contact'}><Button>お問い合わせ</Button></Link> */}
          </Card>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
