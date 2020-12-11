const express = require('express');
const Project = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await Project.getAll();
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
    res.status(200).json(newPost);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;