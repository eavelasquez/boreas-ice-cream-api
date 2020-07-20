/**
 * Default specific configuration.
 * @author Esteban Velásquez <eavc.30@gmail.com>
 */

require('dotenv').config();

/**
 * @namespace
 * @property {string}   env             - Default value for environment.
 * @property {number}   port            - Default value of port.
 * @property {string}   host            - Default value for the host address.
 * @property {object}   mongo           - Default value for mongodb connection.
 * @property {object}   mongo.db        - Default value for database name.
 * @property {object}   mongo.uri       - Default value for uri mongodb.
 * @property {object}   mongo.options   - Default value for uri mongodb.
 */
module.exports = {
  env: process.env.ENV,
  port: process.env.PORT || 3001,
  host: process.env.HOST || '127.0.0.1',
  mongo: {
    db: 'boreas-ice-cream',
    uri: process.env.MONGODB_URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  },
};
