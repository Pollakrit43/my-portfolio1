const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.json());

// Configure middleware and routes here

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.post('/contact', (req, res) => {
  const { recipient, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'your-email-service',
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@example.com',
    to: recipient,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/contact'); // Replace with your frontend URL
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});