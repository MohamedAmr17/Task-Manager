const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
  // Register user
  register: async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      res.status(201).json({ user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Login user
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      res.json({ user, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = userController;