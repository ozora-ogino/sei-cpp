import React from 'react';
import { Container } from 'components/common';
import { Wrapper, IntroWrapper, Details, Thumbnail, LogoList, Logo } from './styles';

export const Companies = (props) => {

  return (
    <Wrapper>
      <IntroWrapper as={Container}>
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
      </IntroWrapper>
    </Wrapper>
  );
};
