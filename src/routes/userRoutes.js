const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { userValidation } = require('../middleware/validation');

// All routes are prefixed with /api/users

// Register new user
router.post('/register', userValidation, userController.register);

// Login user
router.post('/login', userController.login);

module.exports = router;