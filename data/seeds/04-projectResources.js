
exports.seed = function(knex) {
  return knex('projectResources').truncate()
    .then(function () {
      return knex('projectResources').insert([
        {projectId: 1, resourceId: 1},
        {projectId: 2, resourceId: 2},
        {projectId: 3, resourceId: 3},
        {projectId: 3, resourceId: 4}
      ]);
    });
};
