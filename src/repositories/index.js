const UserRepository = require('./user-repository');

module.exports = function Repositories({ mappers, knex }) {
  this.userRepository = new UserRepository({ mappers, knex });
};
