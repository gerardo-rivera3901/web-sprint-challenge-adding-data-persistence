
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('projectId');
      tbl.string('name').notNullable();
      tbl.string('description');
      tbl.boolean('completed').defaultTo(0);
    })
    .createTable('resources', tbl => {
      tbl.increments('resourceId');
      tbl.string('name').unique().notNullable();
      tbl.string('description');
    })
    .createTable('tasks', tbl => {
      tbl.increments('taskId');
      tbl.string('description').notNullable();
      tbl.string('notes');
      tbl.boolean('completed').defaultTo(0);
      tbl.integer('project_id')
        .unsigned().notNullable()
        .references('projectId').inTable('projects')
        .onDelete('CASCADE').onUpdate('CASCADE');
    })
    .createTable('projectResources', tbl => {
      tbl.increments();
      tbl.integer('projectId')
        .unsigned().notNullable()
        .references('projectId').inTable('projects')
        .onDelete('CASCADE').onUpdate('CASCADE');
      tbl.integer('resourceId')
        .unsigned().notNullable()
        .references('resourceId').inTable('resources')
        .onDelete('CASCADE').onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projectResources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
