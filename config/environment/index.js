/**
 * Default specific configuration.
 */

require('dotenv').config();

/**
 * @namespace
 * @property {string}   env   - Default value for environment.
 * @property {number}   port  - Default value of port.
 * @property {string}   host  - Default value for the host address.
 */
module.exports = {
  env: process.env.ENV,
  port: process.env.PORT || 3000,
  host: process.env.HOST || '127.0.0.1',
};
