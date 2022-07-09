const dbConfig = require('../configs/db-config');
const knex = require('../knex-setup')({
  client: 'pg',
  connection: {
    ...dbConfig
  },
  debug: true
});

function handleError(error) {
  console.error('RECREATE_DB - could not run', error);
  process.exit(1);
}

async function dropAllTables() {
  knex.schema.dropTableIfExists('user');

  return 'DROPPED ALL TABLES .........................';
}

function run2() {
  dropAllTables()
    .then(console.info)
    .catch(handleError)
    .finally(() => knex.destroy());
}

run2();
