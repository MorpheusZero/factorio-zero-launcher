const express = require('express');

// Setup the server.
let server = express();

// Configure Routes for API calls.
server.get('/', (req, res) => {
    res.send(`<h2>TEST</h2>>`);
});

// Export Server to be consumed by the main app.
exports.Server = server;