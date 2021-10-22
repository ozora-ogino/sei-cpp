import React, { useContext } from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <span>© All rights are reserved | {new Date().getFullYear()} | Made with by SEI-CPP</span>
      </Details>
    </Flex>
  </Wrapper>
);
