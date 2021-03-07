import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/layout/layout';
import { Title, Subtitle } from '../components/font-elements/Fonts';
import SkillBar from '../components/skill-bar/SkillBar';

import Diagram from '../components/diagram/Diagram';

const ProjectContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* flex-flow: column; */
  /* align-items: center; */
  /* margin: 0 20px; */
  /* height: 100%; */
`;

const SkillsWrapper = styled.div`
  flex: 1 0 auto;
  border: 1px solid black;
  min-width: 300px;
  height: 500px;
`;
const DiagramWrapper = styled.div`
  flex: 1 0 auto;
  min-width: 300px;
  @media (min-width: 600px) and (max-width: 900px) {
    min-width: 600px;
  }
`;

function About() {
  return (
    <>
      <Head>
        <title>Skills | Sebastian</title>
      </Head>
      <Layout>
        <ProjectContent>
          <SkillsWrapper>
            <Subtitle>Skills</Subtitle>
            <SkillBar name="Javascript" value="90" color="#f7df1e" />
          </SkillsWrapper>
          <DiagramWrapper id="diagram-container">
            <Subtitle>How I built this site</Subtitle>
            <Diagram />
          </DiagramWrapper>
        </ProjectContent>
      </Layout>
    </>
  );
}

export default About;
