import styled from 'styled-components';

const ContactForm = styled.form`
  display: flex;
  flex-flow: column;
  input,
  textarea {
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #2b2b2b;
    color: #8d8d8d;
  }
  input {
    border: none;
    padding: 10px;
  }
  textarea {
    resize: vertical;
    height: 200px;
    max-height: 350px;
  }
`;
const NameEmail = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Submit = styled.div`
  margin: 0 8px;
  input {
    cursor: pointer;
  }
`;
const Field = styled.div`
  margin: 8px;
  flex: 1 0 auto;
`;

export { ContactForm, NameEmail, Submit, Field };