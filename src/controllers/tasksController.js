const tasks = require('../models/tasks')

class TasksControllers {
  async store (req, res) {
    const task = tasks.create(req.body)
    return res.json(task)
  }
  async update (req, res) {
    const task = await tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(task)
  }
  async delete (req, res) {
    await tasks.findByIdAndDelete(req.params.id)
    return res.json({ message: 'Deleted' })
  }
  async list (req, res) {
    const task = await tasks.find()
    return res.json(task)
  }
}

module.exports = new TasksControllers()
