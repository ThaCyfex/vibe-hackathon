const User = require('../models/User');

// This is my userController. I use it to let users view and update their profile. I make sure to fetch the right user and handle errors gracefully.

/**
 * Controller for retrieving the authenticated user's profile.
 */
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Controller for updating the user's profile.
 */
exports.updateProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
