import React, {useContext} from 'react';
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
          <a href="https://github.com/ozora-ogino" rel="noopener noreferrer" target="_blank">
           Ozora 
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="34" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
)};
