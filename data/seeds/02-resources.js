
exports.seed = function(knex) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        {resourceName: 'Shrink Ray', resourceDescription: 'From the genius mind of Gru himself :o '},
        {resourceName: 'Bundle of Hay', resourceDescription: 'Only the finest hay directly imported from Texas'},
        {resourceName: 'Nunchucks', resourceDescription: 'Just in case...'},
        {resourceName: 'Tap-Dancing Shoes', resourceDescription: 'Just in case...'}
      ]);
    });
};
