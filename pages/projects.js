import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/layout/layout';
import { Title } from '../components/font-elements/Fonts';

import Diagram from '../components/diagram/Diagram';

const ProjectContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  height: 100%;
`;

function About() {
  return (
    <>
      <Head>
        <title>Projects | Sebastian</title>
      </Head>
      <Layout>
        <ProjectContent>
          <Title>Projects</Title>
          <Diagram />
        </ProjectContent>
      </Layout>
    </>
  );
}

export default About;
