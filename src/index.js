const Services = require('./services');
const Knex = require('./knex-setup');
const services = new Services();
const Mappers = require('./mappers');
const mappers = new Mappers();
const Repositories = require('./repositories');

const knex = Knex({
  client: 'pg',
  connection: {
    ...services.configService.database
  },
  debug: true
});

const repositories = new Repositories({ mappers, knex });
