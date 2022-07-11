const UserRepository = require('./user-repository');
const SchemaRepository = require('./schema-repository');
const FileRepository = require('./file-repository');
const LinkRepository = require('./link-repository');

module.exports = function Repositories({ mappers, knex, parser }) {
  this.userRepository = new UserRepository({ mappers, knex });
  this.schemaRepository = new SchemaRepository(parser);
  this.fileRepository = new FileRepository({ knex });
  this.linkRepository = new LinkRepository({ knex });
};
