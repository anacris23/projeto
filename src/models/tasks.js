const mongoose = require('mongoose')

const SchemaTasks = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },

  completed: {
    required: true
  },
  creatAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('tasks', SchemaTasks)
