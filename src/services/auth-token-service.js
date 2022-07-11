const jwt = require('jsonwebtoken');
const ConfigService = require('./config-service');
const configService = new ConfigService();

module.exports = function AuthTokenService() {
  this.createAuthToken = function createAuthToken(args) {
    const now = Math.floor(Date.now() / 1000);
    return jwt.sign(
      {
        ...args,
        iat: now,
        exp: now + configService.jwt.lifespan
      },
      configService.jwt.secret
    );
  };

  this.verifyAuthToken = function verifyAuthToken(token) {
    try {
      return jwt.verify(token, configService.jwt.secret);
    } catch (err) {
      throw err;
    }
  };
};
