// In controllers/adminController.js
const { User } = require('../models'); // Point to your models

exports.listUsers = async (req, res) => {
  try {
    // Fetch all users that are not deleted
    const users = await User.findAll({
      where: { Deleted: false },
      attributes: ['UserId', 'FirstName', 'LastName'],
    });

    // Render the admin user list view
    res.render('admin/userList', { users });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};
