import Head from 'next/head';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import tendril from '../components/tendril/tendril.controller';
import Layout from '../components/layout/layout';
import { Title, Subtitle } from '../components/font-elements/Fonts';

const TendrilCanvas = styled.canvas`
  position: absolute;
  top: 0;
  z-index: -1;
  @media (max-width: 900px) {
    display: none;
  }
`;

const SubtitleMobile = styled(Subtitle)`
  @media (max-width: 900px) {
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 4em;
  @media (max-width: 900px) {
    height: unset;
    align-items: center;
    margin: 10rem 2rem 0;
    padding-bottom: 0;
  }
`;

const Contact = styled.div`
  border: 1px solid var(--theme-red);
  text-align: center;
  width: 220px;
  height: 50px;
  a {
    display: block;
    font-family: 'Hind Vadodara';
    background: none;
    color: var(--theme-red);
    line-height: 50px;
    text-decoration: none;

    &:visited {
      color: var(--theme-red);
    }
    &:hover {
      background-color: var(--theme-red);
      color: var(--white);
      transition: 0.3s ease-out all;
    }
  }
`;

function HomePage() {
  const oscillatorCanvas = useRef();
  useEffect(() => {
    const canvasContext = oscillatorCanvas.current.getContext('2d');
    const clearTendril = tendril(canvasContext);
    return clearTendril;
  }, []);

  return (
    <>
      <Head>
        <title>Home | Sebastian</title>
      </Head>
      <TendrilCanvas ref={oscillatorCanvas}></TendrilCanvas>
      <Layout>
        <Content>
          <Title>
            Hi,
            <br /> I’m Sebastian
          </Title>
          <SubtitleMobile>
            Frontend developer based in Medellín, Colombia.
          </SubtitleMobile>
          <Contact>
            <Link href="/contact">Contact me</Link>
          </Contact>
        </Content>
      </Layout>
    </>
  );
}

export default HomePage;
