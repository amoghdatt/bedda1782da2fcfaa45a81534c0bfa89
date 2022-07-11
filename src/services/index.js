const ConfigService = require('./config-service');
const FileService = require('./file-service');
const UUIDService = require('./uuid-service');
const AuthTokenService = require('./auth-token-service');
const PasswordService = require('./password-service');
const TimeService = require('./time-service');
const UniqueIdService = require('./unique-id-service');

function Services() {
  this.configService = new ConfigService();
  this.FileService = FileService;
  this.uuidService = new UUIDService();
  this.authTokenService = new AuthTokenService();
  this.passwordService = new PasswordService();
  this.timeService = new TimeService();
  this.uniqueIdService = new UniqueIdService();
}

module.exports = Services;
