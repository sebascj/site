import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/layout/layout';
import { Subtitle } from '../components/font-elements/Fonts';
import SkillBar from '../components/skill-bar/SkillBar';
import Diagram from '../components/diagram/Diagram';
import Card from '../components/card/Card';

const ProjectContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: 600px) {
    margin: 4em;
  }
`;
const SkillsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 300px;
`;
const DiagramWrapper = styled.div`
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const ExperienceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 10;
  justify-content: space-between;
`;

const Skills = styled.div`
  margin: 20px;
  position: relative;
`;
const Skill = styled(SkillBar)`
  margin: 20px;
`;

const StyledCard = styled(Card)`
  color: var(--text-gray);
  padding: 20px;
  width: 48%;
  @media (max-width: 1300px) {
    width: 100%;
    margin: 16px;
  }

  .title {
    font-family: 'Source Sans Pro';
    display: block;
    font-size: 2em;
    font-weight: bold;
  }
  .subtitle {
    font-family: 'Hind Vadodara';
    display: block;
    font-size: 1.2em;
    font-weight: bold;
  }
  .date {
    font-family: 'Hind Vadodara';
    display: block;
  }
  .body {
    font-family: 'Roboto';
    display: block;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
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
          <LeftContent>
            <SkillsWrapper>
              <Skills>
                <Subtitle>Skills and Experience</Subtitle>
                <Skill name="Javascript" value="90" color="var(--orange-200)" />
                <Skill name="AngularJS" value="90" color="var(--orange-200)" />
                <Skill name="React" value="70" color="var(--orange-200)" />
                <Skill name="Docker" value="50" color="var(--orange-200)" />
                <Skill name="Mongo" value="30" color="var(--orange-200)" />
              </Skills>
            </SkillsWrapper>
            <ExperienceWrapper>
              <StyledCard>
                <span className="title">Fronted Developer</span>
                <span className="subtitle">Anomali</span>
                <span className="date">2017 - Present</span>
                <span className="body">
                  Anomali® delivers intelligence‐driven cybersecurity solutions
                </span>
              </StyledCard>
              <StyledCard>
                <span className="title">Software Developer</span>
                <span className="subtitle">Government of Antioquia</span>
                <span className="date">2015 - 2016</span>
                <span className="body">
                  The Secretary of Education is the entity responsible for
                  guaranteeing the right to education in the department.
                </span>
              </StyledCard>
            </ExperienceWrapper>
          </LeftContent>
          <DiagramWrapper id="diagram-container">
            <Diagram />
          </DiagramWrapper>
        </ProjectContent>
      </Layout>
    </>
  );
}

export default About;
