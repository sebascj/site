import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MenuIcon from '../styles/icons/mobile-icon.svg';
import Icon from '../icon/Icon';

const LeftNavBar = styled.div`
  position: fixed;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  width: 110px;
  z-index: 10;
  box-shadow: 0 5.3px 24.7px -20px rgba(0, 0, 0, 0.272),
    0 6.6px 25.2px -20px rgba(0, 0, 0, 0.354),
    0 15px 60px -20px rgba(0, 0, 0, 0.54);

  @media (max-width: 1300px) {
    display: none;
  }
`;

const List = styled.ul`
  width: 100%;
  padding: 0;
  position: relative;
`;

const RouteActive = styled.span(
  ({ active }) => `
    @media(max-width: 1300px) {
      color: ${active ? 'var(--theme-red)' : 'var(--text-gray)'};
    }
    @media(min-width: 1300px) {
      &::after {
        display: ${active ? 'block' : 'none'};
        content: '';
        width: 100%;
        height: 2px;
        background: var(--theme-red);
        position: absolute;
        bottom: 10px;
      }
    }
`
);

const ListItem = styled.li`
  list-style-type: none;
  text-align: center;
  position: relative;
  a {
    font-family: 'Hind Vadodara';
    color: var(--text-gray);
    display: block;
    padding: 12px;
    text-decoration: none;
  }
  a:visited {
    color: inherit;
  }
  a:hover {
    background: var(--silver-gray-light);
    color: var(--theme-red);
  }
  @media screen and (max-width: 1300px) {
    a {
      font-size: 2rem;
    }
  }
`;

const MobileNavIcon = styled.button`
  display: none;
  border: none;
  background: unset;
  @media screen and (max-width: 1300px) {
    color: var(--theme-red);
    width: 70px;
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
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    z-index: 80;
    background-color: var(--white);
  }
  & > div {
    width: 100%;
    position: relative;
  }
`;
const Logo = styled.div`
  margin-top: 2em;
`;
const ScreenMenu = styled.div`
  justify-content: center;
  display: flex;
  flex-flow: column;
`;

const ContactIcons = styled.div`
  cursor: pointer;
  height: 12rem;
  cursor: pointer;
  a {
    text-decoration: none;
    margin: 0.4em;
  }
  span::before {
    color: var(--text-gray);
    font-size: 1.3em;
  }
`;

const Navigation = () => {
  const [showNav, setNav] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const toggleMobileNavMenu = (e) => {
    e.preventDefault();
    if (!showNav) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = '';
    }
    setNav(!showNav);
  };

  const menu = (
    <List>
      <ListItem>
        <RouteActive active={router.pathname === '/'}>
          <Link href="/">Home</Link>
        </RouteActive>
      </ListItem>
      <ListItem>
        <RouteActive active={router.pathname === '/about'}>
          <Link href="/about" passHref>
            About
          </Link>
        </RouteActive>
      </ListItem>
      <ListItem>
        <RouteActive active={router.pathname === '/skills'}>
          <Link href="/skills">Skills</Link>
        </RouteActive>
      </ListItem>
      <ListItem>
        <RouteActive active={router.pathname === '/contact'}>
          <Link href="/contact">Contact</Link>
        </RouteActive>
      </ListItem>
    </List>
  );

  useEffect(() => {
    setLoading(false);
    const handleRouteChange = () => {
      setNav(false);
      document.body.style.position = '';
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {!loading && (
        <MobileNavIcon onClick={toggleMobileNavMenu}>
          <MenuIcon />
        </MobileNavIcon>
      )}
      {showNav && <MobileMenu>{menu}</MobileMenu>}
      {!loading && (
        <LeftNavBar>
          <Logo>
            <Icon name="website" styles="font-size: 6em;"></Icon>
          </Logo>
          <ScreenMenu>{menu}</ScreenMenu>
          <ContactIcons>
            <a
              href="https://www.linkedin.com/in/sebastian-clavijo/"
              rel="noreferrer"
              target="_blank">
              <Icon name="linkedin"></Icon>
            </a>
            <a
              href="https://github.com/sebascj"
              rel="noreferrer"
              target="_blank">
              <Icon name="github"></Icon>
            </a>
            <a
              href="https://twitter.com/sh4k_the_kid"
              rel="noreferrer"
              target="_blank">
              <Icon name="twitter"></Icon>
            </a>
          </ContactIcons>
        </LeftNavBar>
      )}
    </>
  );
};

export default Navigation;
