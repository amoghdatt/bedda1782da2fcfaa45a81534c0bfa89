const ConfigService = require('./config-service');

function Services() {
  this.configService = new ConfigService();
}

module.exports = Services;
