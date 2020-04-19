exports.up = (knex) => {
    return knex.schema.createTable('curso', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('cod').notNullable();
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('curso');
};
