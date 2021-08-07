import React, { useContext } from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => {
  return (
    <Wrapper>
      <Flex as={Container}>
        <Details>
          <span>
            © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
            {' '}
            by{' '}
            {/* <a href="https://github.com/ozora-ogino" rel="noopener noreferrer" target="_blank"> */}
            SEI-CPP
            {/* </a> */}
          </span>
        </Details>
      </Flex>
    </Wrapper>
  )
};
