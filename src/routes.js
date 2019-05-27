const express = require('express')
const controller = require('./controllers/tasksController')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.send('1235')
})

routes.post('/api/tasks', controller.store)
routes.delete('/api/tasks/:id', controller.delete)
routes.put('/api/tasks/:id', controller.update)
routes.get('/api/tasks', controller.list)

routes.get('/formulario', (req, res) => {
  res.render('form')
})
/* routes.post('/insert', (req, res) => {
  const { tarefa, completed } = req.body
}) */
module.exports = routes
