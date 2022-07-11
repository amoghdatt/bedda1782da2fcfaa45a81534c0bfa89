const bcrypt = require('bcrypt');
const { PASSWORD_SALT_ROUND } = require('../constants/project-constants');

module.exports = function PasswordService() {
  this.hashPassword = function hashPassword(plainTextPassword) {
    return bcrypt.hashSync(plainTextPassword, PASSWORD_SALT_ROUND);
  };

  this.verifyPassword = function verifyPassword(plainTextPassword, hashedPassword) {
    return bcrypt.compareSync(plainTextPassword, hashedPassword);
  };
};
