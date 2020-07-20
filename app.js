/**
 * Server main file.
 */

const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

const routesConfig = require('./api');
const expressConfig = require('./config/express');
const { port, host, mongo } = require('./config/environment/index');

/**
 * Connection to MongoDB server
 */
mongoose.connect(mongo.uri, mongo.options);
mongoose.connection.on('error', (error) => {
  console.error('Error', 'MongoDB connection error', {
    data: error,
    time: new Date().toISOString(),
  });
  process.exit(-1);
});

/** Setup server */
const app = express();
const server = http.createServer(app);

expressConfig(app);
routesConfig(app);

/**
 * Start server
 */
function startServer() {
  app.iceCreamShop = server.listen(port, host, () => {
    console.log(`Express server listening on port ${port}, in ${app.get('env')} mode: \x1b[32m%s\x1b[0m`, 'online');
  });
}
setImmediate(startServer);

/**
 * Expose app
 */
module.exports = app;
