/**
 * Express configuration.
 * @author Esteban Velásquez <eavc.30@gmail.com>
 */

const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');

module.exports = (app) => {
  const env = app.get('env');

  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));

  if (env === 'development') {
    app.use(errorHandler());
  }
};
