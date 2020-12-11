
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        {name: 'Shrink Ray', description: 'From the genius mind of Gru himself :o '},
        {name: 'Bundle of Hay', description: 'Only the finest hay directly imported from Texas'},
        {name: 'Nunchucks', description: 'Just in case...'},
        {name: 'Tap-Dancing Shoes', description: 'Just in case...'}
      ]);
    });
};
