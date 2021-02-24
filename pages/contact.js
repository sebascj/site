import Head from 'next/head';
import Layout from '../components/layout/layout';
import Navigation from '../components/navigation/navigation';

function About() {
  return (
    <>
      <Head>
        <title>Contact | Sebastian</title>
      </Head>
      <Layout>
        <Navigation />
        <div>
          <h1>Contact</h1>
        </div>
      </Layout>
    </>
  );
}

export default About;
