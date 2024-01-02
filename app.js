const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Change this to your desired port

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submissions
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    // Send email
    sendEmail(name, email);

    // In a real-world scenario, you would store the data in a database
    // For simplicity, we'll just log the data to the console here
    console.log('Submitted Data:', { name, email });

    // You can send a response back to the client if needed
    res.send('Data submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(Server is running on http://localhost:${port});
});

// Function to send email
function sendEmail(name, email) {
    const transporter = nodemailer.createTransport({
        service: 'your_email_service', // Replace with your email service (e.g., 'gmail')
        auth: {
            user: 'jash9493@gmail.com',
            pass: 'jvmpispj7',
        },
    });

    const mailOptions = {
        from: 'jash9493@gmail.com',
        to: 'pubgfellow7@gmail.com', // Replace with the recipient's email
        subject: 'New Form Submission',
        text: Name: ${name}\nEmail: ${email},
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}
