// const Mailgun = require('mailgun.js');
const Mailgun = require('mailgun.js');

// const formData = new FormData();
// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({
//   username: 'api',
//   key: process.env.MAILGUN_API_KEY
// });

exports.handler = async function (event, context) {
  // await mg.messages
  //   .create('sandbox48da53d19a2b4316ae55ec1e025f472f.mailgun.org', {
  //     from: 'Sebastian Web Developer <sebas.cj@gmail.com>',
  //     to: ['sebas.cj@gmail.com'],
  //     subject: 'Hello World',
  //     message: '<h1>Testing some Mailgun awesomness</h1>'
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'email sent' })
  };
};
