import { useForm } from 'react-hook-form';
import { ContactForm, NameEmail, Submit, Field } from './form-styles';

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
        <input type="submit" />
      </Submit>
    </ContactForm>
  );
};

export default Form;
