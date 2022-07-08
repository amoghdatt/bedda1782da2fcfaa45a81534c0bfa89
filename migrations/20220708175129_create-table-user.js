'use strict';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('user', function (table) {
    table.increments('id');
    table.uuid('guid').unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('password').unique().notNullable();
    table.string('firstName').notNullable();
    table.string('lastName');
    table.jsonb('phoneContact');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('user');
};
