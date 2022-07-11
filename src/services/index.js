const ConfigService = require('./config-service');
const FileService = require('./file-service');
const UUIDService = require('./uuid-service');
const AuthTokenService = require('./auth-token-service');
const PasswordService = require('./password-service');

function Services() {
  this.configService = new ConfigService();
  this.FileService = FileService;
  this.uuidService = new UUIDService();
  this.authTokenService = new AuthTokenService();
  this.passwordService = new PasswordService();
}

module.exports = Services;
