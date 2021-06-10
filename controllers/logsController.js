const express = require('express')
const logs = express.Router()
const capArr = require('../models/log.js')

logs.get('/logs', (req, res) => {
    res.json(capArr)
    
})
// app.get('/logs', (req, res) => {
//     res.json(logs)
// })



module.exports = logs;