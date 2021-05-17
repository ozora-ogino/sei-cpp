import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const current = {
    // color: theme === 'light' ? '#ffa000' : '#00e676',
    // background: 'linear-gradient(to right, #30CFD0 0%, #330867 100%)',
    // '-webkit-background-clip': 'text',
    // '-webkit-text-fill-color': 'transparent',
    textDecoration: "underline",
    fontWeight: "bold",
  }

  return (
    <Wrapper desktop={desktop}>
      <Link  to={"/"}  activeStyle={current} >Home</Link>
      <Link  to={"/news"} activeStyle={current}  >News</Link>
      <Link  to={"/seminar"} activeStyle={current}  >Seminar</Link>
      {/* <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink> */}
    </Wrapper>
  )

};

export default NavbarLinks;
