const config = require('config');

function ConfigService() {
  const database = {
    host: config.get('database.host'),
    user: config.get('database.user'),
    password: config.get('database.password'),
    database: config.get('database.database'),
    port: config.get('database.port')
  };

  const jwt = {
    lifespan: parseInt(config.get('jwt.lifespan')),
    secret: config.get('jwt.secret')
  };

  return { database, jwt };
}

module.exports = ConfigService;
