const express = require('express')
const logs = express.Router()
const capArr = require('../models/log.js')

logs.get('/', (req, res) => {
    res.json(capArr)
  })

logs.get('/:id', (req, res) => {
    //grab id 
    const id = req.params.id
    //if id in arr exists
    if (capArr[id]) {
        //yes: send just that index
        res.json(capArr[id])        
    }
    else {
        //no: redirect to path 404
        res.redirect('/404')
    }
})
//is this a heap?
logs.post('/', (req, res) => {
    capArr.push(req.body)
    res.json(capArr[ - 1])
})

logs.put('/:id', (req, res) => {
    const id = req.params.id
    if (capArr[id]) {
        capArr[id] = req.body 
        res.json(capArr[id])
    }
    else {
        res.redirect('/404')
    }
})

logs.delete('/:id', (req, res) => {
    const id = req.params.id
    if (capArr[id]) {
        const deleted = capArr.splice(id, 1)
        res.json(deleted)
    }
    else {
        res.redirect('/404')
    }
})



module.exports = logs;