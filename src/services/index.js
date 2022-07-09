const ConfigService = require('./config-service');
const FileService = require('./file-service');

function Services() {
  this.configService = new ConfigService();
  this.FileService = FileService;
}

module.exports = Services;
