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
  display: flex;
  flex-flow: column;
  /* border: 1px solid black; */
  min-width: 300px;
`;
const DiagramWrapper = styled.div`
  flex: 2 0 auto;
  min-width: 300px;
  @media (min-width: 600px) and (max-width: 900px) {
    min-width: 600px;
  }
`;

const ExperienceWrapper = styled.div``;

const Skills = styled.div`
  border: 5px dashed var(--neumorph-gray);
  margin: 20px;
  position: relative;
  flex: 1 0 auto;
`;
const Skill = styled(SkillBar)`
  margin: 20px;
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
            <ExperienceWrapper>
              <Subtitle>Experience</Subtitle>
            </ExperienceWrapper>
            <Skills>
              <Subtitle>Skills</Subtitle>
              <Skill name="Javascript" value="90" color="var(--orange-200)" />
              <Skill name="AngularJS" value="90" color="var(--orange-200)" />
              <Skill name="React" value="70" color="var(--orange-200)" />
              <Skill name="Docker" value="50" color="var(--orange-200)" />
              <Skill name="Mongo" value="30" color="var(--orange-200)" />
            </Skills>
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
