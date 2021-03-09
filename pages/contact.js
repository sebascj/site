import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/layout/layout';
import Form from '../components/form/Form';
import GoogleMap from '../components/map/GoogleMap';
import { Title } from '../components/font-elements/Fonts';

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
  @media (min-width: 600px) {
    margin: 4em;
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
          </FormWrapper>
          <GoogleMap />
        </ContactWrapper>
      </Layout>
    </>
  );
}

export default About;
