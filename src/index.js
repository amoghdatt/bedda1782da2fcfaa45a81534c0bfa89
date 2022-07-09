const Services = require('./services');
const Knex = require('./knex-setup');
const services = new Services();
const Mappers = require('./mappers');
const mappers = new Mappers();
const Repositories = require('./repositories');
const Server = require('./server');
const fastify = require('fastify')({
  logger: true
});
const FileController = require('./controllers/file-controller');
const UserController = require('./controllers/user-controller');
const $RefParser = require('json-schema-ref-parser');
const v1Routes = require('./routes/v1')();
const routes = { v1Routes };

const knex = Knex({
  client: 'pg',
  connection: {
    ...services.configService.database
  },
  debug: true
});

const repositories = new Repositories({ mappers, knex, parser: new $RefParser() });
const controllers = {
  fileController: new FileController({ repositories, knex, services }),
  userController: new UserController({ repositories, knex, services })
};

async function start() {
  const schemaRepository = await repositories.schemaRepository.loadAll();
  new Server({ fastify, mappers, services, knex, routes, schemaRepository, controllers })
    .setup()
    .then(server => server.run());
}

start();
