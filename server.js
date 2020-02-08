const express = require('express');

const projectsRouter = require('./routes/projectsRouter');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: "This projects API is ALIVE!"})
})

module.exports = server;