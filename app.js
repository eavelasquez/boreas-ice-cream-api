/**
 * Server main file.
 */

const http = require('http');
const express = require('express');
const { port, host } = require('./config/environment/index');

/** Setup server */
const app = express();
const server = http.createServer(app);

/**
 * Start server
 */
function startServer() {
  app.iceCreamShop = server.listen(port, host, () => {});
}
setImmediate(startServer);

/**
 * Expose app
 */
module.exports = app;
