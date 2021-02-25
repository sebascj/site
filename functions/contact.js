const mailgun = require('mailgun-js');

// const formData = new FormData();
// const mailgun = new Mailgun(formData);

exports.handler = function (event, context) {
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_URL
  });
  mg.messages().send(
    {
      from: 'Sebastian Web Developer <sebas.cj@gmail.com>',
      to: ['sebas.cj@gmail.com'],
      subject: 'Hello World',
      text: '<h1>Testing some Mailgun awesomness</h1>'
    },
    (error, response) => {
      console.log({
        statusCode: 200,
        body: JSON.stringify({ message: 'email sent' })
      });
    }
  );
};
