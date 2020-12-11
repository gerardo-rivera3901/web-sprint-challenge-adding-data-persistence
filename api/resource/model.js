const db = require('../../data/dbConfig');

module.exports = {
  getAll() {
    return db('resources');
  },
  getById(id) {
    return db('resources').where('resourceId', id).first();
  },
  add(post) {
    return db('resources').insert(post);
  }
};