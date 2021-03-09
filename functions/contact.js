const mailgun = require('mailgun-js');

exports.handler = function (event, context) {
  const message = JSON.parse(event.body);
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_URL
  });
  const email = {
    from: `${message.name} <${message.email}>`,
    to: `Sebastian Clavijo <${process.env.EMAIL}>`,
    subject: message.subject,
    text: message.body
  };

  mg.messages().send(email, (error, response) => {
    if (error) {
      return console.log(error);
    }
    return {
      statusCode: 200,
      body: 'Mail Sent'
    };
  });
};
