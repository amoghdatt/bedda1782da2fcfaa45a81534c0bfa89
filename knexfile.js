const dbConfig = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'postgres',
    port: 5432
  },

  pool: {
    min: 2,
    max: 10
  },

  migrations: {
    directory: 'migrations'
  }
};

module.exports = {
  dev: dbConfig,
  development: dbConfig
};
