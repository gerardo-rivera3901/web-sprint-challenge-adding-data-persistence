const express = require('express');
const Project = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await Project.getAll();
    data.forEach(project => {
      if(project.completed == 0 || null) {
        project.completed = false;
      } else {
        project.completed = true;
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
    const newPostId = await Project.add(post);
    const newPost = await Project.getById(newPostId[0]);
    if(newPost.completed == 0 || null) {
      newPost.completed = false;
    } else {
      newPost.completed = true;
    }
    res.status(200).json(newPost);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;