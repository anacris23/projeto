const tasks = require ('../models/tasks') 

class tasksControllers{
    async store (req,res) {
        const tasks = tasks.create(req.body)
        return res.json (tasks)
    }
    async update (req, res) {
        const tasks = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
          new: true
        })
}
async delete (req, res) {
    await Task.findByIdAndDelete(req.params.id)
    return res.json({ message: 'Deleted' })
  }
  async list (req, res) {
    const task = await tasks.find()
    return res.json(task)
  }
}

module.exports = new TasksController()
