import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';
import HeaderLogo from 'assets/icons/cpp-logo.png';

const Navbar = () => {

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/">
        {/* <div style={{ width: '4rem', margin: 0 }} >
          <img src={HeaderLogo} style={{ margin: 0 }} />
        </div> */}
        <span>SEI-CPP</span>
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
