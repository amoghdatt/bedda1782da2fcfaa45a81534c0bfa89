/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('file', function (table) {
    table.increments('id');
    table.uuid('guid').unique().notNullable();
    table.uuid('userId').notNullable();
    table.string('filename').notNullable();
    table.string('fileType').notNullable();
    table.text('description');
    table.string('category').notNullable;
    table.string('location').notNullable();
    table.decimal('fileSize').notNullable();
    table.timestamp('uploadedAt').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('file');
};
