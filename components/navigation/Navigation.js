import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';

const LeftNavBar = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  background-color: var(--white);
  width: 110px;
  box-shadow: 0 5.3px 24.7px -20px rgba(0, 0, 0, 0.272),
    0 6.6px 25.2px -20px rgba(0, 0, 0, 0.354),
    0 15px 60px -20px rgba(0, 0, 0, 0.54);

  @media (max-width: 1300px) {
    display: none;
  }
`;

const List = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  text-align: center;
  &:hover {
    background-color: var(--silver-gray-light);
  }
  a {
    display: block;
    padding: 12px;
    text-decoration: none;
  }
  a:visited {
    color: var(--text-gray);
  }
`;

const MobileNavIcon = styled.button`
  display: none;
  border: none;
  background: unset;
  @media screen and (max-width: 1300px) {
    width: 50px;
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 99;
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 1300px) {
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 80;
    background-color: gray;
  }
`;

const Navigation = () => {
  const [showNav, setNav] = useState(false);
  const toggleMobileNavMenu = (e) => {
    e.preventDefault();
    setNav(!showNav);
  };
  const closeNavMenu = () => {
    setNav(false);
  };
  const menu = (
    <List>
      <ListItem>
        <Link href="/">Home</Link>
      </ListItem>
      <ListItem>
        <Link href="/about" passHref>
          <a onClick={closeNavMenu}>About</a>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/skills">
          <a onClick={closeNavMenu}>Skills</a>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/projects">
          <a onClick={closeNavMenu}>Projects</a>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/contact">
          <a onClick={closeNavMenu}>Contact</a>
        </Link>
      </ListItem>
    </List>
  );

  return (
    <>
      <MobileNavIcon onClick={toggleMobileNavMenu}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="bars"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="svg-inline--fa fa-bars fa-w-14 fa-3x">
          <path
            fill="currentColor"
            d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
            className=""></path>
        </svg>
      </MobileNavIcon>
      {showNav && <MobileMenu>{menu}</MobileMenu>}
      <LeftNavBar>{menu}</LeftNavBar>
    </>
  );
};

export default Navigation;
