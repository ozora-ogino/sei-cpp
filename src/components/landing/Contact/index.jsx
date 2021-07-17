import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Details } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
  </Wrapper>
);
