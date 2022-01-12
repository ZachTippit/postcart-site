// const sgMail = require('@sendgrid/mail');

// sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

// const sendContactEmail = ({name, email, subject, message}) => {
//     sgMail.send({
//         to: 'zachary.tippit@gmail.com',
//         from: email,
//         subject,
//         text: `${name} has a message for you: ${message}`
//     })
// }

// export default sendContactEmail;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

const sendContactEmail = ({name, email, subject, message}) => {
    const msg = {
    to: 'zachary.tippit@gmail.com',
    from: email, // Use the email address or domain you verified above
    subject,
    text: `${name} sent you a message: ${message}`,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    console.log(msg);

    // sgMail
    // .send(msg)
    // .then(() => {}, error => {
    //     console.error(error);

    //     if (error.response) {
    //     console.error(error.response.body)
    //     }
    // });
}

export default sendContactEmail;