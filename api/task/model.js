const db = require('../../data/dbConfig');

module.exports = {
  getAll() {
    return db('tasks');
  },
  getById(id) {
    return db('tasks').where('taskId', id).first();
  },
  add(post) {
    return db('tasks').insert(post);
  }
};