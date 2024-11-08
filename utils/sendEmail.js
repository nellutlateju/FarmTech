// // const nodemailer = require("nodemailer");
// const nodemailer = require("nodemailer");
// const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: "587",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   const options = {
//     from: sent_from,
//     to: send_to,
//     replyTo: reply_to,
//     subject: subject,
//     html: message,
//   };

//   // Send Email
//   transporter.sendMail(options, function (err, info) {
//     if (err) {
//         console.log(err);
//     } else {
//       console.log(info);
//     }
//   });
// };

// // module.exports = sendEmail;
// module.exports = sendEmail;


// // sendEmail.js
// const nodemailer = require("nodemailer");

// const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: "587",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   const options = {
//     from: sent_from,
//     to: send_to,
//     replyTo: reply_to,
//     subject: subject,
//     html: message,
//   };

//   transporter.sendMail(options, function (err, info) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(info);
//     }
//   });
// };

// module.exports = sendEmail;


// const nodemailer = require("nodemailer");

// const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: 587, // Common SMTP port
//     secure: false,
//     service: 'gmail', // Set to true if using port 465
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const options = {
//     from: sent_from,
//     to: send_to,
//     replyTo: reply_to,
//     subject: subject,
//     html: message,
//   };

//   try {
//     const info = await transporter.sendMail(options);
//     console.log("Email sent successfully:", info);
//     return info; // Return info for potential further use or logging
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw new Error('Email could not be sent'); // Throw error for handling in the route
//   }
// };

// module.exports = sendEmail;



// const nodemailer = require("nodemailer");

// const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: 587, // Common SMTP port
//     secure: false,
//     service: 'gmail', // Set to true if using port 465
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const options = {
//     from: sent_from,
//     to: send_to,
//     replyTo: reply_to,
//     subject: subject,
//     html: message,
//   };

//   try {
//     const info = await transporter.sendMail(options);
//     console.log("Email sent successfully:", info);
//     return info; // Return info for potential further use or logging
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw new Error('Email could not be sent'); // Throw error for handling in the route
//   }
// };

// module.exports = sendEmail;



const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587, // Common SMTP port
    secure: false,
    service: 'gmail', // Set to true if using port 465
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const options = {
    from: sent_from,
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: message,
  };

  try {
    const info = await transporter.sendMail(options);
    console.log("Email sent successfully:", info);
    return info; // Return info for potential further use or logging
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error('Email could not be sent'); // Throw error for handling in the route
  }
};

module.exports = sendEmail;