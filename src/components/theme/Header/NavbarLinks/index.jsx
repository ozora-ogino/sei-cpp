import React from 'react';
import { Link } from 'gatsby';
import { Wrapper } from './styles';


const NavbarLinks = ({ desktop }) => {

  const current = {
    textDecoration: "underline",
    fontWeight: "bold",
  }
  return (
    <Wrapper desktop={desktop}>
      <Link to={"/"} activeStyle={current} >Home</Link>
      {/* <Link to={"/seminars"} activeStyle={current} partiallyActive={true} >Seminar</Link> */}
      <Link to={"/news"} activeStyle={current}  >News</Link>
      <Link to={"/contact"} activeStyle={current}  >Contact</Link>
      {/* <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink> */}
    </Wrapper>
  )

};

export default NavbarLinks;
