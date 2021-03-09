import styled from 'styled-components';

const ContactForm = styled.form`
  display: flex;
  flex-flow: column;
  border: 2px solid var(--text-gray);
  input,
  textarea {
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--white);
    color: var(--text-gray);
    font-family: 'Hind Vadodara';
    font-size: 1em;
  }
  input {
    border: none;
    padding: 10px;
    &::placeholder {
      color: var(--text-gray);
    }
  }
  textarea {
    resize: vertical;
    height: 200px;
    max-height: 350px;
    padding: 10px;
    border: none;
    &::placeholder {
      color: var(--text-gray);
    }
  }
`;
const NameEmail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 475px) {
    & > div:first-child {
      border-right: 2px solid var(--text-gray);
    }
  }
`;
const Submit = styled.div`
  button {
    background: var(--white);
    border: none;
    width: 100%;
    height: 3em;
    font-size: 1em;
    font-family: 'Hind Vadodara';
    cursor: pointer;
  }
  /* margin: 0 8px; */
  /* input {
    cursor: pointer;
  } */
`;
const Field = styled.div`
  border-bottom: 2px solid var(--text-gray);
  /* margin: 8px; */
  flex: 1 0 auto;
`;

export { ContactForm, NameEmail, Submit, Field };
