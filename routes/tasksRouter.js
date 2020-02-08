const express = require('express');

const Tasks = require('./taskModel');

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(task => {
            console.log(task)
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error retrieving tasks"})
        })
})
router.get('/:id', (req, res) => {
    const {id} = req.params;

    Tasks.getTaskByID(id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error getting this task with this id"})
        })
})

router.post('/', (req, res) => {
    const data = req.body;

    Tasks.addTask(data)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error adding this task"})
        })
        // {
        //     "name": "Go buy phone",
        //     "description": "256G",
        // }
})

module.exports = router;