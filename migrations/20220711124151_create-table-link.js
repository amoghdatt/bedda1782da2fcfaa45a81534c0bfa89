/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('link', function (table) {
    table.increments('id');
    table.uuid('guid').unique().notNullable();
    table.uuid('userId').notNullable();
    table.uuid('fileId').notNullable();
    table.string('linkId').unique().notNullable();
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('lastAccessedAt');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('link');
};
