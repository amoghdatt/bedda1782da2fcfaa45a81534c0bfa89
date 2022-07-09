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
  const { userRepository, fileRepository } = repositories;

  const users = require('../../seeds/user-seed')();
  const userFiles = require('../../seeds/file-seed')();

  console.info('CREATING users.................');
  await Promise.all(users.map(user => userRepository.createOrUpdate(user, knex)));
  console.info('CREATING files.................');
  await Promise.all(userFiles.map(file => fileRepository.createOrUpdate(file, knex)));

  return knex.destroy();
}

generateReferenceData();
