import Head from 'next/head';
import Layout from '../components/layout/layout';
import { Title } from '../components/font-elements/Fonts';

function About() {
  return (
    <>
      <Head>
        <title>Projects | Sebastian</title>
      </Head>
      <Layout>
        <Title>Projects</Title>
      </Layout>
    </>
  );
}

export default About;
