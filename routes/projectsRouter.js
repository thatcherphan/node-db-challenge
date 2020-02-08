const express = require('express');

const Projects = require('./projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error retrieving projects"})
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Projects.getProjectById(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error getting this project with this id"})
        })
})

router.post('/', (req, res) => {
    const data = req.body;

    Projects.addProject(data)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error adding this project"})
        })
        // {
        //     "name": "Go buy phone",
        //     "description": "256G",
        //     "completed": false
        // }
})

module.exports = router;