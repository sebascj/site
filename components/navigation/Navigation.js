import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MenuIcon from '../styles/icons/mobile-icon.svg';

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
  width: 100%;
  padding: 0;
`;

const ListItem = styled.li`
  list-style-type: none;
  text-align: center;
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
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 80;
    background-color: var(--white);
  }
`;

const Navigation = () => {
  const [showNav, setNav] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const toggleMobileNavMenu = (e) => {
    e.preventDefault();
    setNav(!showNav);
  };

  const menu = (
    <List>
      <ListItem>
        <Link href="/">Home</Link>
      </ListItem>
      <ListItem>
        <Link href="/about" passHref>
          About
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/skills">Skills</Link>
      </ListItem>
      <ListItem>
        <Link href="/projects">Projects</Link>
      </ListItem>
      <ListItem>
        <Link href="/contact">Contact</Link>
      </ListItem>
    </List>
  );

  useEffect(() => {
    setLoading(false);
    const handleRouteChange = () => {
      setNav(false);
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
      {<LeftNavBar>{!loading && menu}</LeftNavBar>}
    </>
  );
};

export default Navigation;
