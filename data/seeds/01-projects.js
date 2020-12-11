
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {name: 'Steal the Moon', description: 'Pretty self-explanatory...', completed: 1},
        {name: 'Steal the Cows', description: 'Ultra Classified Mision ._. '},
        {name: 'Steal Something Else', description: 'In the works!!'}
      ]);
    });
};
