exports.up = function (knex) {
    return knex.schema.createTable('aluno', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('matricula').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.string('password').notNullable();
        table.integer('id_curso').unsigned().references('id').inTable('curso');
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('aluno');
};
