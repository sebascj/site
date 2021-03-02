import Head from 'next/head';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import tendril from '../components/tendril/tendril.controller';
import Layout from '../components/layout/layout';
import { Title, Subtitle, Paragraph } from '../components/font-elements/Fonts';

const TendrilCanvas = styled.canvas`
  position: absolute;
  top: 0;
  z-index: -1;
`;

const BodyWrapper = styled.div`
  position: relative;
`;

const Content = styled.div``;

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
        <BodyWrapper>
          <Content>
            <Title>Hey There, I’m Sebastian</Title>
            <Subtitle>Frontend developer based in Medellín, Colombia.</Subtitle>
            <Subtitle>This is work in progress home page</Subtitle>
            <Paragraph>Currently using NextJS</Paragraph>
          </Content>
        </BodyWrapper>
      </Layout>
    </>
  );
}

export default HomePage;
