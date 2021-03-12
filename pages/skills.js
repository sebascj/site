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
  @media (max-width: 600px) {
    box-sizing: border-box;
    height: 100%;
    overflow: scroll;
  }
`;
const SkillsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 300px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    margin-top: 3em;
    h2 {
      margin: 0 1em;
    }
  }
`;

const ExperienceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 10;
  justify-content: space-around;
`;

const Skills = styled.div`
  margin: 20px;
  position: relative;
  .skill-title {
    font-family: 'Hind Vadodara';
    color: var(--text-gray);
    font-size: 1.3em;
  }
`;
const Skill = styled(SkillBar)`
  margin: 20px;
`;

const StyledCard = styled(Card)`
  color: var(--text-gray);
  padding: 20px;
  width: 42%;
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

function About() {
  return (
    <>
      <Head>
        <title>Skills | Sebastian</title>
      </Head>
      <Layout>
        <ProjectContent>
          <Container>
            <Subtitle>Skills and Experience</Subtitle>
            <SkillsWrapper>
              <Skills>
                <span className="skill-title">Frontend</span>
                <Skill name="JavaScript" value="90" color="var(--orange-200)" />
                <Skill name="AngularJS" value="90" color="var(--orange-200)" />
                <Skill name="React" value="70" color="var(--orange-200)" />
                <span className="skill-title">Server Side</span>
                <Skill name="NodeJS" value="70" color="var(--orange-200)" />
                <Skill name="Mongo" value="30" color="var(--orange-200)" />
                <span className="skill-title">Tools</span>
                <Skill name="Git" value="80" color="var(--orange-200)" />
                <Skill
                  name="Command Line / CLI"
                  value="80"
                  color="var(--orange-200)"
                />
                <Skill name="Docker" value="50" color="var(--orange-200)" />
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
          </Container>
          <Container id="diagram-container">
            <Subtitle>Website Architecture</Subtitle>
            <Diagram />
          </Container>
        </ProjectContent>
      </Layout>
    </>
  );
}

export default About;
