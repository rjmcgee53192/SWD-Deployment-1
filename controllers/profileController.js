// profileController.js
const { User, Post } = require('../models'); // Point to your models

exports.viewProfile = async (req, res) => {
  try {
    // Replace with your user ID retrieval logic (e.g., from JWT or session)
    const userId = req.userId; // Extract userId from JWT or session

    // Find the user and their posts
    const user = await User.findByPk(userId);
    const posts = await Post.findAll({
      where: { UserId: userId },
    });

    // Render the profile view (replace 'profile' with your actual view name)
    res.render('profile', {
      user: user,
      posts: posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

