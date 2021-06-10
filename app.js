// DEPENDENCIES
const express = require("express");
const logs = require('./models/log.js')
const logsController = require('./controllers/logsController')
// CONFIGURATION
const app = express();

// ROUTES
app.use(express.json())
app.use('/logs',logsController)
app.get("/", (req, res) => {
    res.send("Welcome to the Captain's Log!");
});

app.get('*', (req, res) => {
    res.status(404).send('ya done messed up A-A-ron')
})

// EXPORT
module.exports = app;