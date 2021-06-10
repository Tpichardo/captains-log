const express = require('express');
const logsController = require('./controllers/logsController.js');

const app = express()

app.use(express.json())
app.use('/logs', logsController)

app.get("/", (req, res) => {
    res.send('welcome to the captain\'s log')
})

app.get("*", (req, res) => {
    res.status(404).send('RRRRRRRR, Page not found')
})

module.exports = app;