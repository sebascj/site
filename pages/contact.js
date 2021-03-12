import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/layout/layout';
import Form from '../components/form/Form';
import GoogleMap from '../components/map/GoogleMap';
import { Title } from '../components/font-elements/Fonts';
import Icon from '../components/icon/Icon';

const FormWrapper = styled.div`
  position: relative;
  max-width: 740px;
  margin: 0 20px;
  flex: 1 1 auto;
  @media (max-width: 1300px) {
    max-width: unset;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  @media (min-width: 600px) {
    padding: 4em;
  }
`;
const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 4rem;
  cursor: pointer;
  a {
    text-decoration: none;
    margin: 0.4em;
  }
  span::before {
    color: var(--text-gray);
    font-size: 1.5em;
  }
`;

function About() {
  return (
    <>
      <Head>
        <title>Contact | Sebastian</title>
      </Head>
      <Layout>
        <ContactWrapper>
          <FormWrapper>
            <Title>Contact me</Title>
            <Form />
            <ContactIcons>
              <a
                href="https://www.linkedin.com/in/sebastian-clavijo/"
                rel="noreferrer"
                target="_blank">
                <Icon name="linkedin"></Icon>
              </a>
              <a
                href="https://github.com/sebascj"
                rel="noreferrer"
                target="_blank">
                <Icon name="github"></Icon>
              </a>
              <a
                href="https://twitter.com/sh4k_the_kid"
                rel="noreferrer"
                target="_blank">
                <Icon name="twitter"></Icon>
              </a>
            </ContactIcons>
          </FormWrapper>
          <GoogleMap />
        </ContactWrapper>
      </Layout>
    </>
  );
}

export default About;
