const Services = require('./services');
const Knex = require('./knex-setup');
const services = new Services();

const knex = Knex({
  client: 'pg',
  connection: {
    ...services.configService.database
  },
  debug: true
});
