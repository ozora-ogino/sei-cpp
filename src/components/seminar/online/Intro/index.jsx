import React from 'react';
import { Header } from 'components/theme';
import { Container, Card } from 'components/common';
import { Wrapper, Top } from './styles';

export const Intro = () => {
  const description =
    '我が社ではDXや働き方の改革をテーマに定期的にZoomを用いたオンラインセミナーを無料で開催しています。';
  return (
    <Top>
      <Header />
      <Wrapper as={Container}>
        <h1 style={{ marginBottom: '3rem' }}>オンラインセミナー</h1>
        <Card>
          <div style={{ margin: '1rem' }}>
            <p>{description}</p>
            <p>過去のプレゼンテーションの一部資料を公開していますのでご活用ください。</p>
          </div>
        </Card>
      </Wrapper>
    </Top>
  );
};
