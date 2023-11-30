const express = require('express');
const { Post, User } = require('../models'); // Import User as well for future operations
const router = express.Router();

// Create a new Post
router.post('/', async (req, res) => {
  try {
    const { UserId, PostTitle, PostBody } = req.body;
    const newPost = await Post.create({
      UserId,
      PostTitle,
      PostBody
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all Posts for a User
router.get('/:UserId', async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: {
        UserId: req.params.UserId
      }
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a Post by ID
router.put('/:PostId', async (req, res) => {
  try {
    const { PostTitle, PostBody } = req.body;
    const updated = await Post.update(
      { PostTitle, PostBody },
      {
        where: { PostId: req.params.PostId }
      }
    );
    if (updated[0] === 1) {
      res.status(200).json({ message: 'Post updated successfully' });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a Post by ID (Soft delete with a 'Deleted' column)
router.delete('/:PostId', async (req, res) => {
  try {
    const deleted = await Post.update(
      { Deleted: true }, // Assuming 'Deleted' is a boolean field
      {
        where: { PostId: req.params.PostId }
      }
    );
    if (deleted[0] === 1) {
      res.status(204).json({ message: 'Post deleted successfully' });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
