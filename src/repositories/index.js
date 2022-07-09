const UserRepository = require('./user-repository');
const SchemaRepository = require('./schema-repository');

module.exports = function Repositories({ mappers, knex, parser }) {
  this.userRepository = new UserRepository({ mappers, knex });
  this.schemaRepository = new SchemaRepository(parser);
};
