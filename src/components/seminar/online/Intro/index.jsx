import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'components/theme';
import { Container, Card } from 'components/common';
import { ListItems, Targets } from '../../common/ListItems';
import { Wrapper, Grid, DocWrapper, Top, Button } from './styles';
import isshiki from 'assets/speakers-icon/isshiki-2.png'
import seminarPDF from 'assets/pdf/cpp2021-short.pdf';

export const Intro = (props) => {
  const description = "我が社では定期的にZoomを用いたオンラインセミナーを無料で開催しています。我が社のオンラインセミナーには他にはない３つの特徴があります。"
  const point3 = "1.アメリカ式の対話型のセミナー 2.シリコンバレーで働く企業からIT専門の弁護士まで幅広い層 3."
  return (
    <Top>
      <Header />
      <Wrapper as={Container}>
        <h1 style={{ marginBottom: '3rem' }}>オンラインセミナー</h1>
      </Wrapper>
    </Top>
  );
};