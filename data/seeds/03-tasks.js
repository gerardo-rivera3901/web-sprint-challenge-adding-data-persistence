
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {taskDescription: 'Steal the Shrink Ray', taskNotes: 'Can be found in Gru\'s underground base', taskCompletionStatus: 1, projectId: 1},
        {taskDescription: 'Shrink the Moon', taskNotes: 'Get a steady aim or accidently shrink the wrong planet', taskCompletionStatus: 1, projectId: 1},
        {taskDescription: 'Stuff the Moon Inside of Pocket', taskNotes: 'Make sure to not forget it\'s in there', taskCompletionStatus: 1, projectId: 1},
        {taskDescription: 'Steal a Van', projectId: 2},
        {taskDescription: 'Find some Cows', projectId: 2},
        {taskDescription: 'Stuff Cows Inside of Van', taskNotes: 'No cows left behind!!', projectId: 2},
        {taskDescription: 'Sit', projectId: 3},
        {taskDescription: 'Think', projectId: 3}
      ]);
    });
};
