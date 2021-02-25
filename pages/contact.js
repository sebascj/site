import Head from 'next/head';
import Layout from '../components/layout/layout';
import Navigation from '../components/navigation/navigation';
import { useState } from 'react';

const sendEmail = async (e) => {
  e.preventDefault();
  try {
    const email = await fetch('/.netlify/functions/contact', {
      method: 'POST'
    });
    // console.log(email);
  } catch (error) {
    console.error(error);
  }
};

function About() {
  const [name, setName] = useState('Sebastian');
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
        <div>
          <form onSubmit={sendEmail}>
            <label htmlFor="name">
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}></input>
            </label>
            <button>submit</button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default About;
