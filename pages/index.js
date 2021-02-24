import Head from 'next/head';
import { useEffect, useRef } from 'react';
import tendril from '../components/tendril/tendril.controller';
import styled from 'styled-components';

import Layout from '../components/layout/layout';

import Navigation from '../components/navigation/navigation';

const TendrilCanvas = styled.canvas`
  position: absolute;
  top: 0;
  z-index: -1;
`;

const BodyWrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  color: #fff;
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
      <Layout>
        <TendrilCanvas ref={oscillatorCanvas}></TendrilCanvas>
        <Navigation />
        <BodyWrapper>
          <Content>
            <h1>Hey There, </h1>
            <h2>This is work in progress home page</h2>
            <h3>Currently using NextJS</h3>
          </Content>
        </BodyWrapper>
      </Layout>
    </>
  );
}

export default HomePage;
