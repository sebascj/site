import Head from 'next/head';
import { useEffect, useRef } from 'react';
import oscillator from './components/canvas.controller';

function HomePage() {
  const oscillatorCanvas = useRef();
  useEffect(() => {
    const canvasContext = oscillatorCanvas.current.getContext('2d');
    oscillator(false, canvasContext);
  });
  return (
    <div>
      <Head>
        <title>Home | Sebastian</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Hey There, </h1>
      <h2>This is work in progress home page</h2>
      <h3>Currently using NextJS</h3>
      <canvas ref={oscillatorCanvas}></canvas>
    </div>
  );
}

export default HomePage;
