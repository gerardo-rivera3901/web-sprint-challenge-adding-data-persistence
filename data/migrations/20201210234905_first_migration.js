
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('projectId');
      tbl.string('projectName').notNullable();
      tbl.string('projectDescription');
      tbl.boolean('projectCompletionStatus').defaultTo(0);
    })
    .createTable('resources', tbl => {
      tbl.increments('resourceId');
      tbl.string('resourceName').unique().notNullable();
      tbl.string('resourceDescription');
    })
    .createTable('tasks', tbl => {
      tbl.increments('taskId');
      tbl.string('taskDescription').notNullable();
      tbl.string('taskNotes');
      tbl.boolean('taskCompletionStatus').defaultTo(0);
      tbl.integer('projectId')
        .unsigned().notNullable()
        .references('projectId').inTable('projects')
        .onDelete('CASCADE').onUpdate('CASCADE');
    })
    .createTable('projectResources', tbl => {
      tbl.increments('projectResourceId');
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
