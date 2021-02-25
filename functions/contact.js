const mailgun = require('mailgun-js');

exports.handler = function (event, context, callback) {
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
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      });
    }
  );
};
