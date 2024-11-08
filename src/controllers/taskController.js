const Task = require('../models/Task');

const taskController = {
  // Create task
  createTask: async (req, res) => {
    try {
      const task = new Task({
        ...req.body,
        owner: req.user._id
      });
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all tasks
  getTasks: async (req, res) => {
    try {
      const match = {};
      if (req.query.status) {
        match.status = req.query.status;
      }

      const tasks = await Task.find({ owner: req.user._id, ...match });
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update task
  updateTask: async (req, res) => {
    try {
      const task = await Task.findOneAndUpdate(
        { _id: req.params.id, owner: req.user._id },
        req.body,
        { new: true, runValidators: true }
      );
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete task
  deleteTask: async (req, res) => {
    try {
      const task = await Task.findOneAndDelete({
        _id: req.params.id,
        owner: req.user._id
      });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json({msg : "Task is Deleted"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = taskController;