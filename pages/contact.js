import Head from 'next/head';
import Layout from '../components/layout/layout';
import styled from 'styled-components';
import Form from '../components/form/Form';

// const sendEmail = async (e) => {
//   e.preventDefault();
//   try {
//     const email = await fetch('/.netlify/functions/contact', {
//       method: 'POST'
//     });
//     // console.log(email);
//   } catch (error) {
//     console.error(error);
//   }
// };

const FormWrapper = styled.div`
  max-width: 30rem;
`;

const Title = styled.h1`
  font-family: 'Lordida Solid', 'Open Sans';
  font-size: 3rem;
  color: var(--orange-yellow);
`;

function About() {
  return (
    <>
      <Head>
        <title>Contact | Sebastian</title>
      </Head>
      <Layout>
        <div>
          <Title>Contact me</Title>
        </div>
        <FormWrapper>
          <Form />
          {/* <form onSubmit={sendEmail}>
            <label htmlFor="name">
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}></input>
            </label>
            <button>submit</button>
          </form> */}
        </FormWrapper>
      </Layout>
    </>
  );
}

export default About;
