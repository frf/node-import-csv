import Knex from 'knex';

export  async function up(knex: Knex) {
    return knex.schema.createTable('occurrences', table => {
        table.increments('id').primary();
        table.uuid('uuid').notNullable();
        table.string('os_number').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('occurrences');
}