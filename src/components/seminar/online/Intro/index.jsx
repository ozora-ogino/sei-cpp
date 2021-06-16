import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'components/theme';
import { Container, Card } from 'components/common';
import { ListItems, Targets } from '../../common/ListItems';
import { Wrapper, Grid, DocWrapper, Top, Button } from './styles';
import isshiki from 'assets/speakers-icon/isshiki-2.png'
import seminarPDF from 'assets/pdf/cpp2021-short.pdf';

export const Intro = (props) => {
  return (
    <Top>
      <Header />
      <Wrapper as={Container}>
        <h1 style={{ marginBottom: '3rem' }}>オンラインセミナー</h1>
      </Wrapper>
    </Top>
  );
};