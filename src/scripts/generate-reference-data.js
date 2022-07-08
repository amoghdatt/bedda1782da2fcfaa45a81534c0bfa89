const dbConfig = require('../configs/db-config');
const Mappers = require('../mappers');
const mappers = new Mappers();

const knex = require('knex')({
  client: 'pg',
  connection: {
    ...dbConfig
  },
  debug: true
});

const Repositories = require('../repositories');
const repositories = new Repositories({ mappers, knex });

async function generateReferenceData() {
  const { userRepository } = repositories;

  const users = require('../../seeds/user-seed')();

  console.info('CREATING users.................');
  await Promise.all(users.map(user => userRepository.createOrUpdate(user, knex)));

  return knex.destroy();
}

generateReferenceData();
