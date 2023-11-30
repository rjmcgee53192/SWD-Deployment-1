const express = require('express');
const { Post } = require('../models');  // Update the path

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    const post = await Post.update(req.body, {
      where: { PostId: req.params.id }
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    await Post.update({ Deleted: true }, {
      where: { PostId: req.params.id }
    });
    res.status(200).json({ message: 'Post deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
