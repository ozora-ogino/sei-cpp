import React from 'react';
import { Header } from 'components/theme';
import { Container, Morpher } from 'components/common';
import { Wrapper, IntroWrapper, Details } from './styles';

const texts = {
  text: 'NOT FOUND',
  words: [
    '見つかりません',
    '찾을 수 없음',
    'não encontrado',
    'δεν βρέθηκε',
    '未找到',
    'पता नहीं चला',
    'non trovato',
    'không tìm thấy',
    'не найден',
    "loaʻa 'ole",
    'pas trouvé',
  ],
};

export const Content = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>404</h1>
        <Morpher to="/" texts={texts} element="h1" />
        <p>404 page not found</p>
      </Details>
    </IntroWrapper>
  </Wrapper>
);
