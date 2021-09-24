import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import Layout from '../components/layout/layout';

import { Paragraph, Subtitle } from '../components/font-elements/Fonts';

const ResumePrint = createGlobalStyle`
  @page {
    margin: 0.5in 1in;
  }
  body {
    background: white;
  }
`;

const ResumeWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  color: var(--text-gray);
  .bold {
    font-weight: bold;
  }
  .skills {
    margin: 1em 0;
  }
`;
const ResumeHead = styled.div`
  span {
    font-family: 'Roboto';
    margin: 0.2em 0;
    font-size: 1em;
    display: block;
    color: var(--text-gray);
  }
  h2 {
    margin: 0;
    font-size: 2em;
    font-family: 'Source Sans Pro';
  }
  a,
  a:visited {
    color: var(--theme-red);
  }
`;
const Title = styled.p`
  font-family: 'Hind Vadodara', sans-serif;
  color: var(--theme-red);
  font-size: 1.5em;
  margin: 0;
`;

const ExpBox = styled.div`
  margin: 0 1em;
  p {
    font-size: 0.9em;
    margin: 0.5em;
    line-height: 1.5em;
    text-align: justify;
  }
`;

const ExpTitle = styled.div`
  .title {
    font-family: 'Hind Vadodara', sans-serif;
    font-weight: bold;
  }
  .description {
    color: #6d6d6d;
  }
  .period {
    color: #6d6d6d;
    font-size: 0.9em;
  }
`;

const ExpDescription = styled.div`
  margin: 0 2em;
`;
const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    flex: 1;
    width: 200px;
    margin-bottom: 0.2em;
  }
`;

const Separator = styled.hr`
  border: none;
  width: 100%;
  height: 5px;
  background-color: var(--theme-red);
`;

function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Sebastian</title>
      </Head>
      <ResumePrint />
      <Layout>
        <Separator />
        <ResumeWrapper>
          <ResumeHead>
            <Subtitle>Sebastian Clavijo</Subtitle>
            <Title className="bold">Frontend Developer</Title>
            <span>Medellín, Colombia</span>
            <span>(+57) 300 821 7232</span>
            <span>sebas.cj@gmail.com</span>
            <span>
              More about me at{' '}
              <a href="https://www.sebastianclavijo.dev">
                sebastianclavijo.dev
              </a>
            </span>
          </ResumeHead>
          <div>
            <Title className="bold">Experience</Title>
            <ExpBox>
              <ExpTitle>
                <span className="title">Anomali Inc., Redwood City, CA</span>
                <span className="description">&nbsp;- Frontend Developer</span>
                <br></br>
                <span className="period">January 2017 - Present</span>
              </ExpTitle>
              <ExpDescription>
                <Paragraph>
                  My main task is the maintenance of Anomali ’s platform called
                  Threatstream which is a threat intelligence platform used to
                  automate the collection, management, and distribution of
                  threat data. My duties are creating new requirements and
                  solving bugs reported by the customers and the QA team.
                </Paragraph>
                <Paragraph>
                  Other responsibilities are the development and maintenance of
                  two side projects, the first one is a library that generates
                  the PDFs for the platform (NodeJS) and the second one is a
                  library used to export all the common components such as
                  buttons, forms, and tables used in Threatstream (ReactJS and
                  Angularjs)
                </Paragraph>
                <Paragraph>
                  I am part of the team in charge of reviewing and approving
                  pull requests before they are deployed to production.
                </Paragraph>
              </ExpDescription>
            </ExpBox>
            <ExpBox>
              <ExpTitle>
                <span className="title">
                  Gobernacion de Antioquia, Medellín, Colombia
                </span>
                <span className="description">&nbsp;- Software Developer</span>
                <br></br>
                <span className="period">January 2015 - December 2016</span>
              </ExpTitle>
              <ExpDescription>
                <Paragraph>
                  Design and development of simple libraries based on multiple
                  programming languages, these libraries were used as a learning
                  tool in schools as part of educational programs driven by the
                  Gobernación de Antioquia. Students were taught about web
                  design, mobile design, and games design.
                </Paragraph>
              </ExpDescription>
            </ExpBox>
          </div>
          <div>
            <Title className="bold">Education</Title>
            <ExpBox>
              <ExpTitle>
                <span className="title">
                  Bachelor&apos;s degree in Electronic Engineering
                </span>
                <br></br>
                <span className="description">
                  Institución Universitaria Salazar Y Herrera -&nbsp;
                </span>
                <span className="period">2015</span>
              </ExpTitle>
              <ExpDescription></ExpDescription>
            </ExpBox>
          </div>
          <div className="skills">
            <Title className="bold">Skills</Title>
            <SkillsWrapper>
              <ExpBox>
                <ExpTitle>
                  <span className="title">Language</span>
                </ExpTitle>
                <ExpDescription>
                  <span>Javascript</span>
                </ExpDescription>
              </ExpBox>
              <ExpBox>
                <ExpTitle>
                  <span className="title">Libraries / Frameworks</span>
                </ExpTitle>
                <ExpDescription>
                  <span>AngularJs, React Js, Next Js</span>
                </ExpDescription>
              </ExpBox>
              <ExpBox>
                <ExpTitle>
                  <span className="title">Backend</span>
                </ExpTitle>
                <ExpDescription>
                  <span>NodeJS, Mongo</span>
                </ExpDescription>
              </ExpBox>
              <ExpBox>
                <ExpTitle>
                  <span className="title">Tools</span>
                </ExpTitle>
                <ExpDescription>
                  <span>Git, Docker, Webpack, Command Line / CLI</span>
                </ExpDescription>
              </ExpBox>
            </SkillsWrapper>
          </div>
        </ResumeWrapper>
      </Layout>
    </>
  );
}

export default Resume;
