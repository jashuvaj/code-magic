const express = require('express');
const bodyParser = require('body-parser');

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

    // In a real-world scenario, you would store the data in a database
    // For simplicity, we'll just log the data to the console here
    console.log('Submitted Data:', { name, email });

    // You can send a response back to the client if needed
    res.send('Data submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log('server is running on http://localhost:${jashuva}');
});