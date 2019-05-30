const express = require('express')
const mongoose = require('mongoose')
const nunjucks = require('nunjucks')

class App {
  constructor () {
    this.isDev = process.env.NODE_ENV === 'production'
    this.express = express()
    this.database()
    this.middleware()
    this.routes()
  }
  database () {
    mongoose.connect('mongodb://localhost:27017/atividade', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  }
  middleware () {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
    nunjucks.configure('src/views', {
      autoescape: true,
      express: this.express,
      watch: true
    })
    this.express.set('view engine', 'njk')
  }
  routes () {
    this.express.use(require('./routes'))
  }
}
module.exports = new App().express
