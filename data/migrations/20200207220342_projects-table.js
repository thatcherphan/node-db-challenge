
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name', 128)
                .notNullable();
            tbl.string('description', 256);
            tbl.boolean('completed', false)
                .notNullable();
        })

        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('name', 128)
                .unique()
                .notNullable();
            tbl.string('description', 256);
        })

        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('description', 256)
                .notNullable();
            tbl.string('notes', 256);
            tbl.boolean('completed', false)
                .notNullable();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })

        .createTable('project_resources', tbl => {
            tbl.increments();
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
