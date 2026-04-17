const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

// Define your API routes here
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Express server running as a serverless function!' });
});

module.exports.handler = serverless(app);
