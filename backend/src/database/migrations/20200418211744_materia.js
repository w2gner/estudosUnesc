exports.up = function (knex) {
    return knex.schema.createTable('materia', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('cod').notNullable();
        table.integer('id_curso').unsigned().references('id').inTable('curso');
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('materia');
};
