
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {projectName: 'Steal the Moon', projectDescription: 'Pretty self-explanatory...', projectCompletionStatus: 1},
        {projectName: 'Steal the Cows', projectDescription: 'Ultra Classified Mision ._. '},
        {projectName: 'Steal Something Else', projectDescription: 'In the works!!'}
      ]);
    });
};
