import Head from 'next/head';
import Layout from '../components/layout/layout';
import { Title } from '../components/font-elements/Fonts';

function About() {
  return (
    <>
      <Head>
        <title>Skills | Sebastian</title>
      </Head>
      <Layout>
        <Title>Skills</Title>
      </Layout>
    </>
  );
}

export default About;
