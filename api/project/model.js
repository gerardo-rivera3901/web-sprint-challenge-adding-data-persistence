const db = require('../../data/dbConfig');

module.exports = {
  getAll() {
    return db('projects');
  },
  getById(id) {
    return db('projects').where('projectId', id).first();
  },
  add(post) {
    return db('projects').insert({...post, completed: post.completed == 0 ? false : true});
  }
};