const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const auth = require('../middleware/auth');
const { taskValidation } = require('../middleware/validation');

// All routes are prefixed with /api/tasks
router.use(auth); // Protect all task routes

// Get all tasks (with optional status filter)
router.get('/', taskController.getTasks);

// Create new task
router.post('/', taskValidation, taskController.createTask);

// Update task
router.put('/:id', taskValidation, taskController.updateTask);

// Delete task
router.delete('/:id', taskController.deleteTask);

module.exports = router;