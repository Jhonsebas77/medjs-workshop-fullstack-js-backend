/**
 * Express configuration
 */

const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');

module.exports = (app) => {
  const env = app.get('env');

  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(methodOverride());
  app.use(logger('dev'));

  if (env === 'development' || env === 'test') {
    app.use(errorHandler()); // Error handler - has to be last
  }
};
