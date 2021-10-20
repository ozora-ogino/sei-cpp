import React from 'react';
import { Container, Card } from 'components/common';
import { Wrapper, IntroWrapper, Details, LogoList, Logo } from './styles';

export const Companies = ({ logos }) => (
  <Wrapper>
    <IntroWrapper as={Container}>
      <Card pad="3rem 0 0 0">
        <Details>
          <h2>講演者企業</h2>
        </Details>
        <LogoList>
          {logos.map(logo => (
            <Logo width={logo.size}>
              <img width={logo.size} src={logo.img} alt="logo" />
            </Logo>
          ))}
        </LogoList>
      </Card>
    </IntroWrapper>
  </Wrapper>
);
