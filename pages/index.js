import Head from 'next/head';
import { useEffect, useRef } from 'react';
import tendril from '../components/tendril/tendril.controller';
import styled, { createGlobalStyle } from 'styled-components';

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

const PageStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color:#1d1d1d
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
    <div>
      <Head>
        <title>Home | Sebastian</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PageStyle />
      <TendrilCanvas ref={oscillatorCanvas}></TendrilCanvas>
      <BodyWrapper>
        <Content>
          <h1>Hey There, </h1>
          <h2>This is work in progress home page</h2>
          <h3>Currently using NextJS</h3>
        </Content>
      </BodyWrapper>
    </div>
  );
}

export default HomePage;
