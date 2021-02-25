const mailgun = require('mailgun-js');

exports.handler = function (event, context, callback) {
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_URL
  });
  const data = {
    from: 'Name <sebas.cj@gmail.com>',
    to: 'sebas.cj@gmail.com',
    subject: 'SUBJECT',
    text: 'TEXT',
    html: 'HTML'
  };
  mg.messages().send(data, (error, response) => {
    if (error) {
      return console.log(error);
    }
    callback(null, {
      statusCode: 200,
      body: 'Mail sent'
    });
  });
};
