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
`;
const SkillsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 300px;
`;
const DiagramWrapper = styled.div`
  flex: 2 0 auto;
  min-width: 300px;
  @media (min-width: 600px) and (max-width: 900px) {
    min-width: 600px;
  }
`;

const ExperienceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Skills = styled.div`
  margin: 20px;
  position: relative;
`;
const Skill = styled(SkillBar)`
  margin: 20px;
`;

const StyledCard = styled(Card)`
  margin: 20px;
  color: var(--text-gray);
  padding: 20px;
  max-width: 300px;
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

const LeftContent = styled.section`
  display: flex;
  flex-flow: column;
  /* flex: 1 0 auto; */
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
              {/* <Subtitle>Experience</Subtitle> */}
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
            <Subtitle>How I built this site</Subtitle>
            <Diagram />
          </DiagramWrapper>
        </ProjectContent>
      </Layout>
    </>
  );
}

export default About;
