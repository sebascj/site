import Head from 'next/head';
import Layout from '../components/layout/layout';
import Navigation from '../components/navigation/navigation';

function About() {
  return (
    <>
      <Head>
        <title>Projects | Sebastian</title>
      </Head>
      <Layout>
        <Navigation />
        <div>
          <h1>Projects</h1>
        </div>
      </Layout>
    </>
  );
}

export default About;
