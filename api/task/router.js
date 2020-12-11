const express = require('express');
const Task = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await Task.getAll();
    data.forEach(task => {
      if(task.completed == 0 || null) {
        task.completed = false;
      } else {
        task.completed = true;
      }
    });
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const post = req.body;
    const newPostId = await Task.add(post);
    const newPost = await Task.getById(newPostId[0]);
    res.status(200).json(newPost);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;