const mailgun = require('mailgun-js');

exports.handler = async function (event) {
  const message = JSON.parse(event.body);
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_URL
  });
  const email = {
    from: `${message.name} <${message.email}>`,
    to: `Sebastian Clavijo <${process.env.EMAIL}>`,
    subject: message.subject,
    text: message.message
  };
  try {
    await mg.messages().send(email);
    return {
      statusCode: 200,
      body: 'Mail Sent'
    };
  } catch (e) {
    return { statusCode: 500, body: `Error trying to send message: ${e}` };
  }
};
