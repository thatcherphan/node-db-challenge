const express = require('express');

const db = require('./projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: "alive"})
})

module.exports = router;