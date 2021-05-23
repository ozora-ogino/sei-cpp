import React from 'react';
import { Container, Card } from 'components/common';
import { Wrapper, IntroWrapper, Details, LogoList, Logo } from './styles';

export const Companies = (props) => {

  return (
    <Wrapper>
      <IntroWrapper as={Container}>
        <Card pad='3rem 0 0 0'>
          <Details>
            <h2>Partners</h2>
          </Details>
          <LogoList>
            {
              props.logos.map((logo) => {
                return <Logo width={logo.size}><img width={logo.size} src={logo.img} /></Logo>
              })
            }
          </LogoList>
        </Card>
      </IntroWrapper>
    </Wrapper>
  );
};
