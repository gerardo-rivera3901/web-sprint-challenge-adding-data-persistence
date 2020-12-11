const express = require('express');
const Resource = require('./model');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await Resource.getAll();
    data.forEach(resource => {
      if(resource.completed == 0 || null) {
        resource.completed = false;
      } else {
        resource.completed = true;
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
    const newPostId = await Resource.add(post);
    const newPost = await Resource.getById(newPostId[0]);
    res.status(200).json(newPost);
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;