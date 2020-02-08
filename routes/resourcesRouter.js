const express = require('express');

const Resources = require('./resourceModel');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resource => {
            console.log(resource)
            res.status(200).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error retrieving resources"})
        })
})
router.get('/:id', (req, res) => {
    const {id} = req.params;

    Resources.getResourcesById(id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error getting this resource with this id"})
        })
})

router.post('/', (req, res) => {
    const data = req.body;

    Resources.addResources(data)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Error adding this resource"})
        })
        // {
        //     "name": "Go buy phone",
        //     "description": "256G",
        // }
})

module.exports = router;