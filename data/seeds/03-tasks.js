
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {description: 'Steal the Shrink Ray', notes: 'Can be found in Gru\'s underground base', completed: 1, project_id: 1},
        {description: 'Shrink the Moon', notes: 'Get a steady aim or accidently shrink the wrong planet', completed: 1, project_id: 1},
        {description: 'Stuff the Moon Inside of Pocket', notes: 'Make sure to not forget it\'s in there', completed: 1, project_id: 1},
        {description: 'Steal a Van', project_id: 2},
        {description: 'Find some Cows', project_id: 2},
        {description: 'Stuff Cows Inside of Van', notes: 'No cows left behind!!', project_id: 2},
        {description: 'Sit', project_id: 3},
        {description: 'Think', project_id: 3}
      ]);
    });
};
