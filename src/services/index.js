const ConfigService = require('./config-service');
const FileService = require('./file-service');
const UUIDService = require('./uuid-service');

function Services() {
  this.configService = new ConfigService();
  this.FileService = FileService;
  this.uuidService = new UUIDService();
}

module.exports = Services;
