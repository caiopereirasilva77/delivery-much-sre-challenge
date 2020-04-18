exports.up = function(knex) {
    return knex.schema.createTable('preferences', function (table) {
        table.increments();
        table.string('ip').notNullable();
        table.string('preference').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('preferences');
};