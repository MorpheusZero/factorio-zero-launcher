const express = require('express');

// Export Server to be consumed by the main app.
exports.Server = (app) => {

    // Setup the server.
    let server = express();

    // Configure Routes for API calls.
    server = require('./routes.js').RoutesConfig(server, app);

    return server;

};