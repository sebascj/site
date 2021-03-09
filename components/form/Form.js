import { useForm } from 'react-hook-form';
import { ContactForm, NameEmail, Submit, Field } from './form-styles';

const Form = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await fetch('/.netlify/functions/contact', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContactForm onSubmit={handleSubmit(onSubmit)}>
      <NameEmail>
        <Field>
          <label htmlFor="name">
            <input
              id="name"
              name="name"
              placeholder="Name"
              ref={register({ required: true })}></input>
          </label>
        </Field>
        <Field>
          <label htmlFor="email">
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              ref={register({ required: true })}></input>
          </label>
        </Field>
      </NameEmail>
      <Field>
        <label htmlFor="subject">
          <input
            id="subject"
            name="subject"
            placeholder="Subject"
            ref={register}></input>
        </label>
      </Field>
      <Field>
        <label htmlFor="message">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            ref={register}></textarea>
        </label>
      </Field>
      <Submit>
        <button>Send</button>
      </Submit>
    </ContactForm>
  );
};

export default Form;
