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
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
