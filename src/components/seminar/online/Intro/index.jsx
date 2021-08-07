import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'components/theme';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, DocWrapper, Top, Button } from './styles';

export const Intro = (props) => {
  const description = "我が社ではDXや働き方の改革をテーマに定期的にZoomを用いたオンラインセミナーを無料で開催しています。"
  const point3 = "1.アメリカ式の対話型のセミナー 2.シリコンバレーで働く企業からIT専門の弁護士まで幅広い層 3."
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