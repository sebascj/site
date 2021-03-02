import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/layout/layout';
import { Title, Paragraph } from '../components/font-elements/Fonts';

const AboutContent = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutArticle = styled.article`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 800px;
  p {
    margin: 10px;
    text-align: justify;
    width: 100%;
  }
`;

function About() {
  return (
    <>
      <Head>
        <title>About | Sebastian</title>
      </Head>
      <Layout>
        <div>
          <Title> About</Title>
          <AboutContent>
            <AboutArticle>
              <Paragraph>
                My name is Sebastian Clavijo and I am a frontend developer at
                Anomali, where I have worked for the last 4 years.
              </Paragraph>
              <Paragraph>
                I fell in love with programming when I was studying for a
                bachelor&apos;s degree in Electronic Engineering and programmed
                my first microcontroller in assembly language. Since then I have
                been passionate about coding, algorithms, and logic.
              </Paragraph>
              <Paragraph>
                In my last year at university, two classmates and I built the
                winning robot in a robotics competition that was held in
                Medellin, the city where I live.
              </Paragraph>
              <Paragraph>
                I worked with government educational programs teaching robotics
                and programming to girls and boys in their final years of
                school. It was a very important part of my life that taught me
                the importance of transmitting my knowledge to others.
              </Paragraph>
              <Paragraph>
                When I&apos;m not coding, I spend my free time with my loved
                ones or losing games in World of Warcraft. I like building my
                own computers, playing guitar and video games.
              </Paragraph>
              <Paragraph>
                The game that moved me the most: The last of us part II
                <br />A book I liked: Shutter Island
              </Paragraph>
            </AboutArticle>
          </AboutContent>
        </div>
      </Layout>
    </>
  );
}

export default About;
